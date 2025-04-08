"use client";

import { usePrivacy } from "@/features/privacy/contexts/PrivacyContext";
import { privacyDebug } from "@/features/privacy/utils/debug";
import {
  type ContactFormData,
  contactFormSchema,
  timeSlots,
} from "@/lib/schemas/contact-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import ReCAPTCHA from "react-google-recaptcha";
import { TextInput } from "./text-input";
import { PhoneInput } from "./phone-input";
import { DatePicker } from "./date-picker";
import { TimeSlotSelect } from "./time-slot-select";
import { SuccessNotification } from "./success-notification";
import { ErrorNotification } from "./error-notification";
import { LoadingSpinner } from "./loading-spinner";
import { PrivacyFormNotice } from "@/features/privacy/components/PrivacyNotice";
import { useEffect, useRef, useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { consent } = usePrivacy();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      phone: {
        countryCode: "+91",
        number: "",
      },
      comments: "",
      recaptchaToken: "",
      privacyConsent: {
        accepted: false,
        timestamp: new Date().toISOString(),
        analyticsEnabled: false,
      },
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = form;

  // Reset success/error messages after delay
  useEffect(() => {
    if (showSuccess || error) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, error]);

  // Handle reCAPTCHA changes
  const handleRecaptchaChange = (token: string | null) => {
    setValue("recaptchaToken", token || "");
  };

  // Submit handler with privacy consent and reCAPTCHA
  const onSubmit = async (data: ContactFormData) => {
    const debug = privacyDebug.group("Contact Form Submit");
    console.log("Submitting form data:", data);
    setIsSubmitting(true);
    setError(null);

    try {
      // Get reCAPTCHA token
      const token = data.recaptchaToken;
      if (!token) {
        throw new Error("Please complete the reCAPTCHA verification");
      }

      privacyDebug.init("Form data with reCAPTCHA:", { ...data, token });

      // Update form data with latest privacy status
      const formData: ContactFormData = {
        ...data,
        recaptchaToken: token,
        privacyConsent: {
          accepted: true,
          timestamp: new Date().toISOString(),
          analyticsEnabled: !!consent?.analytics,
        },
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to submit form");
      }

      setShowSuccess(true);
      reset();
      recaptchaRef.current?.reset();
      privacyDebug.init("Form submitted successfully");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      privacyDebug.error("Form submission error:", err);
      setError(message);
    } finally {
      setIsSubmitting(false);
      debug.end();
    }
  };

  return (
    <>
      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <motion.div variants={itemVariants}>
          <TextInput
            label="Name"
            name="name"
            register={register}
            error={errors.name?.message}
            required
            placeholder="Your full name"
            maxLength={50}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextInput
            label="Company Name"
            name="companyName"
            register={register}
            error={errors.companyName?.message}
            required
            placeholder="Your company name"
            maxLength={100}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextInput
            label="Company Email"
            name="companyEmail"
            register={register}
            error={errors.companyEmail?.message}
            required
            placeholder="company@example.com"
            maxLength={100}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <PhoneInput
            label="Phone"
            register={register}
            control={control}
            error={errors.phone?.number?.message}
            required
            onCountryChange={(value) => setValue("phone.countryCode", value)}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <DatePicker
            label="Preferred Date"
            register={register}
            control={control}
            error={errors.date?.message}
            required
          />

          <TimeSlotSelect
            label="Preferred Time Slot"
            register={register}
            error={errors.timeSlot?.message}
            required
            onChange={(value) =>
              setValue("timeSlot", value as (typeof timeSlots)[number])
            }
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextInput
            label="Comments"
            name="comments"
            register={register}
            error={errors.comments?.message}
            placeholder="Any additional comments..."
            maxLength={200}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <PrivacyFormNotice />
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1"
              {...register("privacyConsent.accepted")}
              onChange={(e) => {
                setValue("privacyConsent", {
                  accepted: e.target.checked,
                  timestamp: new Date().toISOString(),
                  analyticsEnabled: consent?.analytics || false,
                });
              }}
            />
            <label className="text-sm">
              I agree to the processing of my data as described in the privacy
              notice above.
            </label>
          </div>
          {errors.privacyConsent?.accepted && (
            <div className="text-sm text-red-600" role="alert">
              {errors.privacyConsent.accepted.message}
            </div>
          )}
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            theme="light"
            size="normal"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
          />
          {errors.recaptchaToken && (
            <div className="text-sm text-red-600 mt-2" role="alert">
              {errors.recaptchaToken.message}
            </div>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full
              bg-green-100
              text-lime-200
              font-medium
              py-3
              px-6
              rounded-lg
              transition-all
              flex
              items-center
              justify-center
              gap-2
              hover:opacity-90
              disabled:opacity-50 
              disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner />
                <span>Submitting...</span>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </motion.div>
      </motion.form>

      <AnimatePresence>
        {showSuccess && (
          <SuccessNotification
            message="Your message has been sent successfully! We'll get back to you soon."
            onClose={() => setShowSuccess(false)}
          />
        )}

        {error && (
          <ErrorNotification message={error} onClose={() => setError(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
