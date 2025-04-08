import { z } from "zod";

// reCAPTCHA token validation schema
export const recaptchaValidation = z.object({
  token: z.string({
    required_error: "Please complete the reCAPTCHA verification",
  })
});

export const timeSlots = [
  // "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
] as const;

const phoneRegex = /^[0-9]{10}$/;

export const contactFormSchema = z.object({
  recaptchaToken: z.string({
    required_error: "Please complete the reCAPTCHA verification"
  }),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters"),
  companyEmail: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email cannot exceed 100 characters"),
  phone: z.object({
    countryCode: z.string(),
    number: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number cannot exceed 10 digits")
      .regex(phoneRegex, "Please enter a valid 10-digit phone number"),
  }),
  date: z.date({
    required_error: "Please select a date",
    invalid_type_error: "Please select a valid date",
  }),
  timeSlot: z.enum(timeSlots, {
    required_error: "Please select a time slot",
    invalid_type_error: "Please select a valid time slot",
  }),
  comments: z.string().max(200, "Comments cannot exceed 200 characters").optional(),
  privacyConsent: z.object({
    accepted: z.boolean({
      required_error: "You must accept the privacy policy to proceed"
    }).refine((val) => val === true, {
      message: "You must accept the privacy policy to proceed"
    }),
    timestamp: z.string(),
    analyticsEnabled: z.boolean()
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
