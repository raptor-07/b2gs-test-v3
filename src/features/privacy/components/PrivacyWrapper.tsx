"use client";

import React from "react";
import { usePrivacy } from "../contexts/PrivacyContext";
import { privacyDebug } from "../utils/debug";

interface Props {
  children: React.ReactNode;
  showLoadingState?: boolean;
}

export function PrivacyWrapper({ children, showLoadingState = false }: Props) {
  const { isReady } = usePrivacy();

  if (!isReady) {
    privacyDebug.init("Privacy not ready yet");
    
    if (showLoadingState) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-500 text-sm">Loading privacy settings...</div>
        </div>
      );
    }
    
    // Don't render anything during initialization
    return null;
  }

  return <>{children}</>;
}
