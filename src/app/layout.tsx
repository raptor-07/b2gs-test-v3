import type { Metadata } from "next";
import { Lexend, IBM_Plex_Serif } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import { NAV_METADATA } from "@/constants/navigation";
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
  title: {
    default: "B2G",
    template: "%s | B2G",
  },
  description: "B2G - Building the future of business",
  applicationName: "B2G",
  authors: [{ name: "B2G Team" }],
  keywords: ["B2G", "Business", "Solutions", "Technology"],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
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

        {/* Preload Logo Images */}
        <link
          rel="preload"
          as="image"
          href={NAV_METADATA.logo.mobile}
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href={NAV_METADATA.logo.desktop}
          type="image/png"
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
