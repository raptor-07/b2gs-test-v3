export interface ConsentState {
  analytics: boolean;
  essential: true;  // Always true
  timestamp: string;
  version: string;
}

export interface ConsentStorage {
  state: ConsentState;
  metadata: {
    lastUpdated: string;
    interactions: ConsentInteraction[];
  }
}

export interface ConsentInteraction {
  type: 'accept' | 'decline' | 'close' | 'modify';
  feature: 'analytics' | 'all';
  timestamp: string;
  path: string;  // Page where interaction occurred
}

export interface PrivacyConfig {
  analytics: {
    measurementId: string;
    region: 'IN';
    pageTracking: {
      enabled: boolean;
      includePath: true;
      includeSearch: true;
    };
  };
  consent: {
    required: true;
    storageKey: 'b2g_privacy_consent';
    version: '1.0';
  };
}

// GA4 specific types
export interface GtagCustomParam {
  value?: string | number | boolean | null;
  label?: string;
  category?: string;
}

export interface AnalyticsEvent {
  name: string;
  params?: Record<string, string | number | boolean | null | GtagCustomParam>;
}

export interface GtagConfigParams {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  send_page_view?: boolean;
}

export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  page_title?: string;
  send_to?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export type GtagConsentParams = {
  ad_storage?: 'granted' | 'denied';
  analytics_storage?: 'granted' | 'denied';
  functionality_storage?: 'granted' | 'denied';
  personalization_storage?: 'granted' | 'denied';
  security_storage?: 'granted' | 'denied';
};

export type GtagCommand = 'config' | 'event' | 'consent' | 'set' | 'js';

// Extend window to include gtag
declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: GtagConfigParams): void;
      (command: 'event', eventName: string, params?: GtagEventParams): void;
      (command: 'consent', update: 'update' | 'default', params: GtagConsentParams): void;
      (command: 'set', params: Record<string, string | number | boolean | null>): void;
      (command: 'js', date: Date): void;
    };
    dataLayer: Array<unknown[]>;
  }
}
