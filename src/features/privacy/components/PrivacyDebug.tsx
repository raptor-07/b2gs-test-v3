"use client";

import { useEffect } from "react";
import { usePrivacy } from "../contexts/PrivacyContext";
import { safeLocalStorage } from "../utils/browser";
import { privacyDebug } from "../utils/debug";

export function PrivacyDebug() {
  const privacyContext = usePrivacy();
  
  useEffect(() => {
    const debug = privacyDebug.group("Privacy Debug");
    
    // Log storage state
    privacyDebug.storage("localStorage:", {
      key: "b2g_privacy_consent",
      value: safeLocalStorage.getItem("b2g_privacy_consent"),
    });

    // Log context state
    privacyDebug.init("Privacy Context:", {
      showBanner: privacyContext.showBanner,
      consent: privacyContext.consent,
      isConsentRequired: privacyContext.isConsentRequired,
      isReady: privacyContext.isReady,
    });

    debug.end();
  }, [
    privacyContext.showBanner,
    privacyContext.consent,
    privacyContext.isConsentRequired,
    privacyContext.isReady,
  ]);

  // Don't render anything
  return null;
}
