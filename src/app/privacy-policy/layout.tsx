import { Metadata } from "next";
import Navbar from "../../ui/components/navbar";
import Header from "../../ui/header";

export const metadata: Metadata = {
  title: "Privacy Policy | Brown2Green Solutions",
  description: "Learn about how we collect, use, and protect your data at Brown2Green Solutions.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div className="bg-brown-100">
        <Header />
        {children}
      </div>
    </main>
  );
}
