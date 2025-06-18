<<<<<<< HEAD
import type { Metadata, Viewport } from "next";
import { Lexend, IBM_Plex_Serif } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--typography-fonts-lexend",
});

const ibmPlex = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--typography-fonts-ibm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://b2g.com"),
  title: {
    default: "B2G",
    template: "%s | B2G - Building the future of business",
  },
  description:
    "B2G - Your trusted partner in building innovative business solutions through cutting-edge technology and strategic expertise",
  applicationName: "B2G",
  authors: [{ name: "B2G Team", url: "https://b2g.com/team" }],
  keywords: [
    "B2G",
    "Business Solutions",
    "Technology Innovation",
    "Digital Transformation",
    "Enterprise Solutions",
    "Business Technology",
    "Future of Business",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://b2g.com",
    siteName: "B2G",
    title: "B2G - Building the future of business",
    description:
      "Your trusted partner in building innovative business solutions through cutting-edge technology and strategic expertise",
    images: [
      {
        url: "https://b2g.com/og-image.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "B2G - Building the future of business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2G - Building the future of business",
    description:
      "Your trusted partner in building innovative business solutions through cutting-edge technology and strategic expertise",
    creator: "@b2g",
    images: ["https://b2g.com/twitter-image.png"], // Replace with your actual Twitter image
  },
  alternates: {
    canonical: "https://b2g.com",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body
        className={`${lexend.variable} ${ibmPlex.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
=======
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
>>>>>>> 2e201a4b04102ec8db85801264d10a900fedab08
