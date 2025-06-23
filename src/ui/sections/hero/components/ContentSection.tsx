import CloseTheLoopButton from "@/components/buttons/close-the-loop";
import { GradientText } from "./GradientText";
import SecondaryButton from "@/components/buttons/secondary-button";

export function ContentSection() {
  return (
    <div className="flex flex-col gap-2">
      {/* Tagline */}
      <h1 className="text-lg md:text-4xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
        Champion{" "}
        <GradientText className="font-ibm italic tracking-[-0.06em]">
          Circular Economy,
        </GradientText>
        <p className="inline text-nowrap">One Scrap at a Time.</p>
      </h1>

      {/* SubTag */}
      <h2 className="text-base md:text-lg lg:text-md font-ibm italic text-mint-950 font-semibold tracking-tighter">
        Waste Management: Measured, Monetized and Compliant!
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base lg:text-base text-mint-950 max-w-2xl">
        We seamlessly integrate Circularity Systems into your business, lowering
        its costs and emissions while fulfilling regulations.
      </p>
      <p className="text-sm md:text-base lg:text-base text-mint-950 max-w-2xl">
        Are you a recycler or a trader? Join our vendor network Today !
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-start items-center gap-2 mt-2">
        <CloseTheLoopButton className="transition-colors duration-300 hover:shadow-md hover:border-yellow-600" />
        <SecondaryButton className="h-10 w-auto bg-gray-50 text-gray-700 transition-colors duration-300 hover:shadow-md hover:gray-800 border border-gray-500 hover:border-gray-600">
          <p className=" text-sm text-nowrap">Become a Partner</p>
        </SecondaryButton>
      </div>
    </div>
  );
}
