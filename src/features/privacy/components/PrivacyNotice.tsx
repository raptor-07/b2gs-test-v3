'use client';

import React from 'react';
import Link from 'next/link';

export function PrivacyFormNotice() {
  return (
    <div className="text-sm opacity-80 space-y-2">
      <p>
        By submitting this form, you agree to our processing of your information as described in our{' '}
        <Link href="/privacy-policy" className="underline hover:opacity-80">
          privacy policy
        </Link>
        .
      </p>
      <p>
        We store contact details securely and retain them as required by Indian IT Act for 5 years.
        You can request access or deletion of your data by contacting our grievance officer.
      </p>
    </div>
  );
}
