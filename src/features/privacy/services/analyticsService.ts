import {
  GtagConfigParams,
  GtagEventParams,
  GtagConsentParams,
  PrivacyConfig,
} from "../types";
import { isBrowser } from "../utils/browser";
import { privacyDebug } from "../utils/debug";

const defaultConfig: PrivacyConfig = {
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    region: "IN",
    pageTracking: {
      enabled: true,
      includePath: true,
      includeSearch: true,
    },
  },
  consent: {
    required: true,
    storageKey: "b2g_privacy_consent",
    version: "1.0",
  },
};

export class AnalyticsService {
  private initialized = false;
  private initializationInProgress = false;
  private readonly config: PrivacyConfig;

  constructor(config: Partial<PrivacyConfig> = {}) {
    this.config = {
      ...defaultConfig,
      ...config,
      analytics: {
        ...defaultConfig.analytics,
        ...config.analytics,
      },
    };

    privacyDebug.analytics("Service created with config:", {
      measurementId: this.config.analytics.measurementId ? "set" : "not set",
      region: this.config.analytics.region,
    });
  }

  initialize(): void {
    if (
      this.initialized ||
      !isBrowser() ||
      this.initializationInProgress ||
      !this.config.analytics.measurementId
    ) {
      privacyDebug.analytics("Initialization skipped:", {
        alreadyInitialized: this.initialized,
        isBrowser: isBrowser(),
        inProgress: this.initializationInProgress,
        hasMeasurementId: !!this.config.analytics.measurementId,
      });
      return;
    }

    const debug = privacyDebug.group("Analytics Initialization");
    privacyDebug.analytics("Starting initialization");
    this.initializationInProgress = true;

    try {
      // Add GA4 base script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.analytics.measurementId}`;
      script.async = true;
      document.head.appendChild(script);
      privacyDebug.analytics(`GA4 script added to head: ${script.src}`);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      privacyDebug.analytics("dataLayer initialized");

      // Create a type-safe gtag function with rest parameters
      const gtag = (...args: unknown[]) => {
        privacyDebug.analytics("gtag called with args:", args);
        window.dataLayer.push(args);
      };

      // Assign gtag to window
      window.gtag = gtag;
      privacyDebug.analytics("gtag function initialized");

      // Add error handler for script loading
      script.onerror = () => {
        privacyDebug.error("Failed to load GA4 script");
        this.initialized = false;
        this.initializationInProgress = false;
      };

      script.onload = () => {
        // Basic configuration
        window.gtag("js", new Date());
        window.gtag("config", this.config.analytics.measurementId, {
          send_page_view: false, // We'll track manually for better control
        });
        privacyDebug.analytics("Basic GA4 configuration completed");

        // Initialize with default denied state
        window.gtag("consent", "default", {
          analytics_storage: "denied",
          ad_storage: "denied",
          functionality_storage: "granted",
          personalization_storage: "denied",
          security_storage: "granted",
        });
        privacyDebug.analytics("Default consent state set");

        this.initialized = true;
        privacyDebug.analytics("Initialization completed successfully");
      };
    } catch (error) {
      privacyDebug.error("Error during initialization:", error);
      this.initialized = false;
    } finally {
      this.initializationInProgress = false;
    }
    debug.end();
  }

  private ensureInitialized(): boolean {
    if (!isBrowser()) return false;
    if (!this.initialized && !this.initializationInProgress) {
      privacyDebug.analytics("Auto-initializing analytics service");
      this.initialize();
    }
    return this.initialized;
  }

  updateConsent(granted: boolean): void {
    if (!this.ensureInitialized()) {
      privacyDebug.analytics("Consent update skipped - not initialized");
      return;
    }

    const debug = privacyDebug.group("Update Consent");
    privacyDebug.analytics("Updating consent state:", { granted });

    const consentParams: GtagConsentParams = {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied", // We don't use advertising
      functionality_storage: "granted", // Essential features
      personalization_storage: "denied", // We don't use personalization
      security_storage: "granted", // Essential for security
    };

    window.gtag?.("consent", "update", consentParams);
    privacyDebug.analytics("Consent state updated");
    debug.end();
  }

  trackPageView(path: string, title?: string): void {
    if (!this.ensureInitialized()) {
      privacyDebug.analytics("Page view tracking skipped - not initialized");
      return;
    }

    const debug = privacyDebug.group("Track Page View");
    privacyDebug.analytics("Tracking page view:", { path, title });

    const params: GtagEventParams = {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    };

    window.gtag?.("event", "page_view", params);
    privacyDebug.analytics("Page view tracked");
    debug.end();
  }

  trackEvent(
    eventName: string,
    category?: string,
    label?: string,
    value?: number
  ): void {
    if (!this.ensureInitialized()) {
      privacyDebug.analytics("Event tracking skipped - not initialized");
      return;
    }

    const debug = privacyDebug.group("Track Event");
    privacyDebug.analytics("Tracking event:", {
      eventName,
      category,
      label,
      value,
    });

    const params: GtagEventParams = {
      event_category: category,
      event_label: label,
      value: value,
    };

    window.gtag?.("event", eventName, params);
    privacyDebug.analytics("Event tracked");
    debug.end();
  }

  updateConfig(params: GtagConfigParams): void {
    if (!this.ensureInitialized()) {
      privacyDebug.analytics("Config update skipped - not initialized");
      return;
    }

    const debug = privacyDebug.group("Update Config");
    privacyDebug.analytics("Updating GA4 config:", params);

    window.gtag?.("config", this.config.analytics.measurementId, params);

    privacyDebug.analytics("Config updated");
    debug.end();
  }
}

// Create singleton instance
export const analytics = new AnalyticsService();
