"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePrivacy } from "../contexts/PrivacyContext";
import { analytics } from "../services/analyticsService";
import { isBrowser } from "../utils/browser";
import { privacyDebug } from "../utils/debug";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const { consent, isReady } = usePrivacy();

  // Initialize GA only after privacy context is ready
  useEffect(() => {
    if (!isReady || !isBrowser()) {
      privacyDebug.analytics("Analytics initialization skipped:", {
        isReady,
        isBrowser: isBrowser(),
      });
      return;
    }

    const debug = privacyDebug.group("Analytics Setup");
    privacyDebug.analytics("Initializing with consent state:", {
      hasConsent: !!consent?.analytics,
    });

    try {
      analytics.initialize();
      if (consent?.analytics) {
        privacyDebug.analytics("Analytics enabled and initialized");
      } else {
        privacyDebug.analytics("Analytics initialized in disabled state");
      }
    } catch (error) {
      privacyDebug.error("Failed to initialize analytics:", error);
    }

    debug.end();
  }, [isReady, consent?.analytics]);

  // Track page views only when consent is granted
  useEffect(() => {
    if (!isReady || !isBrowser() || !consent?.analytics) {
      privacyDebug.analytics("Page view tracking skipped:", {
        isReady,
        isBrowser: isBrowser(),
        hasConsent: !!consent?.analytics,
      });
      return;
    }

    const debug = privacyDebug.group("Page View Tracking");
    
    try {
      const url = window.location.search
        ? `${pathname}${window.location.search}`
        : pathname;

      privacyDebug.analytics("Tracking page view:", { url });
      analytics.trackPageView(url);
      privacyDebug.analytics("Page view tracked successfully");
    } catch (error) {
      privacyDebug.error("Failed to track page view:", error);
    }

    debug.end();
  }, [pathname, consent?.analytics, isReady]);

  // This is a utility component that doesn't render anything
  return null;
}
