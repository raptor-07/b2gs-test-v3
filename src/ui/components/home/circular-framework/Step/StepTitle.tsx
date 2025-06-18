import React from "react";

export const StepTitle: React.FC<{ number: string; title: string }> = ({
  number,
  title,
}) => (
  <div className="flex items-baseline gap-3 sm:gap-4 mb-4 sm:mb-8 md:mb-10">
    <span className="font-aleo text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-brown-700 font-bold">
      {number}
    </span>
    <h2 className="font-lexend text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-brown-700">
      {title}
    </h2>
  </div>
);
