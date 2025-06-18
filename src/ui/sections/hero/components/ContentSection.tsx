import CloseTheLoopButton from "@/components/buttons/close-the-loop";
import { GradientText } from "./GradientText";
import SecondaryButton from "@/components/buttons/secondary-button";

export function ContentSection() {
  return (
    <div className="flex flex-col gap-2">
      {/* Tagline */}
      <h1 className="text-lg md:text-4xl lg:text-2xl xl:text-3xl font-medium text-mint-950 leading-tight">
        Champion <GradientText>Circular Economy</GradientText>, One Scrap at a
        Time.
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
        <CloseTheLoopButton className="" />
        <SecondaryButton className="h-10 w-auto bg-mint-400 text-gray-50 transition-colors duration-300 hover:gray-300">
          <p className=" text-sm text-nowrap">Become a Partner</p>
        </SecondaryButton>
      </div>
    </div>
  );
}
