import React from "react";
import Header from "../../ui/header";
import Navbar from "../../ui/components/navbar";
import FindUsSection from "../../ui/components/home/find-us-section";
import { ContactUsContent } from "../../ui/components/contact-us/animated-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Brown2Green - Sustainable Waste Management Solutions",
  description: "Get in touch with Brown2Green Pvt. Ltd., your partner in sustainable waste management and recycling solutions. We help businesses integrate circularity into their operations and ensure compliance.",
  openGraph: {
    title: "Contact Brown2Green - Sustainable Waste Management Solutions",
    description: "Connect with Brown2Green for sustainable waste management and recycling solutions. Transform your business operations with our circular economy expertise.",
    type: "website",
    siteName: "Brown2Green",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brown2Green Pvt. Ltd.",
  description: "Brown2Green is a waste management company providing sustainable recycling solutions and helping businesses integrate circularity into their operations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "India"
  },
  email: "info@brown2green.earth",
  url: "https://brown2green.earth",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@brown2green.earth",
    areaServed: "IN"
  }
};

export default function ContactUs() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="bg-brown-100">
        <Header />
        <div className="flex-1 flex flex-col justify-center min-h-screen">
          <div className="container mx-auto h-full flex items-center mt-4 my-20 md:py-0">
            <ContactUsContent />
          </div>
        </div>
      </div>
      <div className="bg-brown-100">
        <FindUsSection />
      </div>
    </main>
  );
}
