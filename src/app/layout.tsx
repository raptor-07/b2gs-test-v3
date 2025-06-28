import type { Metadata, Viewport } from "next";
import { Lexend, IBM_Plex_Serif, Inter } from "next/font/google";
// import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--typography-fonts-inter",
});

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
      <head />
      <body
        className={`${lexend.variable} ${ibmPlex.variable} ${inter.variable} antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
