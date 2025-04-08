import { lexend, aleo } from "./fonts";
import "./globals.css";
import { PrivacyProvider } from "@/features/privacy/contexts/PrivacyContext";
import { ConsentBanner } from "@/features/privacy/components/ConsentBanner";
import { GoogleAnalytics } from "@/features/privacy/components/GoogleAnalytics";
// import { PrivacyErrorBoundary } from "@/features/privacy/components/ErrorBoundary";
// import { PrivacyWrapper } from "@/features/privacy/components/PrivacyWrapper";

export const metadata = {
  title: "Brown2Green Solutions",
  description: "AI-driven, compliance-ready waste management solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${aleo.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* <PrivacyErrorBoundary> */}
        <PrivacyProvider>
          {/* <PrivacyDebug /> */}
          <GoogleAnalytics />
          {/* Banner outside wrapper to show immediately */}
          <ConsentBanner />
          {/* Main content with loading state */}
          {/* <PrivacyWrapper showLoadingState>{children}</PrivacyWrapper> */}
          {children}
        </PrivacyProvider>
        {/* </PrivacyErrorBoundary> */}
      </body>
    </html>
  );
}
