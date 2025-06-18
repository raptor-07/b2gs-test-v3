"use client";

import { useRouter } from "next/navigation";

export function ReachOutCard() {
  const router = useRouter();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Transform Your Waste Management?
        </h3>
        <p className="text-gray-600 mb-8">
          Looking for sustainable scrap recycling solutions with regulatory benefits? 
          Our experts are here to help you achieve your sustainability goals.
        </p>
        <button
          onClick={() => router.push("/contact-us")}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
            text-base font-medium rounded-md text-white bg-green-100 hover:bg-green-200 
            transition-colors duration-200"
        >
          Reach Out to Us
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
