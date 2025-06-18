# Privacy Implementation Guide

This document outlines the privacy features implemented in the Brown2Green website, focusing on compliance with Indian IT Act requirements and user privacy protection.

## Core Components

### 1. Privacy Context
- Global state management for consent
- Persistent storage of user preferences
- Compliance with data retention requirements

### 2. Analytics Service
- Privacy-aware Google Analytics 4 integration
- Consent-based tracking
- Page view and event tracking
- No personal data collection without consent

### 3. Consent Management
- Clear consent banner
- Granular control over analytics
- Easy access to privacy policy
- Compliance with Indian IT Act requirements

### 4. Contact Form Integration
- Privacy notice inclusion
- Consent logging
- Secure data handling
- 5-year data retention compliance

## Implementation Details

### Environment Variables
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX
```

### Data Storage
- User consent stored in localStorage
- Server-side consent logging
- Contact form submissions with privacy metadata

### Error Handling
- Error boundaries for privacy components
- Fallback UI for privacy failures
- Continued privacy protection during errors

## Usage Examples

1. Tracking Page Views:
```typescript
const { consent } = usePrivacy();
if (consent?.analytics) {
  analytics.trackPageView(pathname);
}
```

2. Contact Form Privacy:
```typescript
<ContactForm privacyConsent={{
  accepted: true,
  timestamp: new Date().toISOString(),
  analyticsEnabled: consent?.analytics
}} />
```

3. Consent Management:
```typescript
const { updateConsent } = usePrivacy();
await updateConsent({ analytics: true });
```

## Security Considerations

1. Data Protection
   - Minimal data collection
   - Secure storage practices
   - Regular data cleanup

2. User Rights
   - Clear privacy policy
   - Easy consent management
   - Data access/deletion options

3. Compliance
   - Indian IT Act requirements
   - 5-year data retention
   - Privacy by design

## Testing

To test privacy features:
1. Clear localStorage
2. Verify consent banner appears
3. Test analytics with/without consent
4. Verify form submissions include privacy data
5. Check error boundary functionality

## Contributing

When adding new features:
1. Respect user privacy by default
2. Implement proper error handling
3. Include privacy notices where needed
4. Document privacy implications
