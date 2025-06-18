"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { ConsentState } from "../types";

import { analytics } from "../services/analyticsService";
import { safeLocalStorage, isBrowser } from "../utils/browser";

interface PrivacyContextType {
  consent: ConsentState | null;
  isConsentRequired: boolean;
  showBanner: boolean;
  isReady: boolean;
  updateConsent: (granted: boolean) => Promise<void>;
  dismissBanner: () => void;
}

const PrivacyContext = createContext<PrivacyContextType | null>(null);

const STORAGE_KEY = "b2g_privacy_consent";
const CONSENT_VERSION = "1.0";

export function PrivacyProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Single initialization effect
  useEffect(() => {
    try {
      // Read stored consent first
      const storedConsent = safeLocalStorage.getItem(STORAGE_KEY);

      // Process stored consent if exists
      if (storedConsent) {
        try {
          const parsed = JSON.parse(storedConsent);
          if (parsed.version === CONSENT_VERSION) {
            setConsent(parsed);
            // Keep banner hidden for valid consent
            setShowBanner(false);
            analytics.updateConsent(parsed.analytics);
          } else {
            setConsent(null);
            // Show banner for outdated consent
            setShowBanner(true);
          }
        } catch (error) {
          console.error("Error parsing stored consent:", error);
          setConsent(null);
          // Show banner on parse error
          setShowBanner(true);
        }
      } else {
        setConsent(null);
        // Show banner when no consent exists
        setShowBanner(true);
      }
    } catch (error) {
      console.error("Error during initialization:", error);
      setConsent(null);
      // Show banner on any error
      setShowBanner(true);
    } finally {
      // Mark as ready after all state updates
      setIsReady(true);
    }
  }, []); // Run once on mount

  const updateConsent = async (granted: boolean) => {
    if (!isBrowser()) return;

    const newConsent: ConsentState = {
      analytics: granted,
      essential: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };

    try {
      // Store in localStorage first
      const stored = safeLocalStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newConsent)
      );

      if (stored) {
        // Update local state after successful storage
        setConsent(newConsent);
        setShowBanner(false);

        // Update analytics service
        analytics.updateConsent(granted);
      } else {
        throw new Error("Failed to store consent");
      }
    } catch (error) {
      console.error("Error updating consent:", error);
      throw error;
    }
  };

  const dismissBanner = () => {
    if (!isBrowser()) return;

    setShowBanner(false);
  };

  const value = {
    consent,
    isConsentRequired: !consent,
    showBanner,
    isReady,
    updateConsent,
    dismissBanner,
  };

  return (
    <PrivacyContext.Provider value={value}>{children}</PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);
  if (!context) {
    throw new Error("usePrivacy must be used within a PrivacyProvider");
  }
  return context;
}
