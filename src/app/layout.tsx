import { lexend, aleo } from "./fonts";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
