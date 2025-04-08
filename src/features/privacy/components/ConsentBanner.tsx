"use client";

import React from "react";
import { usePrivacy } from "../contexts/PrivacyContext";
import Link from "next/link";
import { Z_INDEX } from "@/utils/z-index";

export function ConsentBanner() {
  const { showBanner, isReady, updateConsent, dismissBanner } = usePrivacy();

  // Don't render anything during SSR
  if (typeof window === "undefined") {
    return null;
  }

  // Only show when both conditions are met
  if (!isReady || !showBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full bg-green-100 text-lime-200 p-4 shadow-lg"
      style={{
        zIndex: Z_INDEX.CONSENT_BANNER,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Privacy Notice</h3>
            <p className="text-sm mb-2">
              We use essential cookies to ensure our website functions properly.
              With your consent, we also use analytics cookies to understand how
              you use our site and improve your experience. View our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:opacity-80"
                onClick={dismissBanner}
              >
                privacy policy
              </Link>{" "}
              for more details.
            </p>
            <p className="text-xs opacity-80">
              As per Indian IT Act requirements, we maintain records of your
              privacy choices.
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              type="button"
              onClick={() => {
                updateConsent(true).catch((error) => {
                  console.error("Error updating consent:", error);
                });
              }}
              className="bg-lime-400 text-green-100 px-6 py-2 rounded hover:opacity-90 transition-opacity font-medium text-sm whitespace-nowrap"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={() => {
                updateConsent(false).catch((error) => {
                  console.error("Error updating consent:", error);
                });
              }}
              className="bg-transparent border border-lime-200 text-lime-200 px-6 py-2 rounded hover:opacity-90 transition-opacity font-medium text-sm whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => {
                dismissBanner();
              }}
              className="text-lime-200 hover:opacity-80 transition-opacity text-sm whitespace-nowrap"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
