import CloseTheLoopButton from "@/components/buttons/close-the-loop";
import { GradientText } from "./GradientText";
import SecondaryButton from "@/components/buttons/secondary-button";

export function ContentSection() {
  return (
    <div className="flex flex-col gap-2 my-4">
      {/* Tagline */}
      <h1 className="text-lg lg:text-5xl xl:text-6xl font-medium text-mint-950 leading-tight">
        Champion <GradientText>Circular Economy</GradientText>, One Scrap at a
        Time.
      </h1>

      {/* SubTag */}
      <h2 className="text-base lg:text-2xl font-ibm italic text-mint-950 font-semibold tracking-tighter">
        Waste Management: Measured, Monetized and Compliant!
      </h2>

      {/* Description */}
      <p className="text-sm lg:text-lg text-mint-950 max-w-2xl">
        We seamlessly integrate Circularity Systems into your business, lowering
        its costs and emissions while fulfilling regulations.
      </p>
      <p className="text-sm lg:text-lg text-mint-950 max-w-2xl">
        Are you a recycler or a trader? Join our vendor network Today !
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-row gap-4 mt-4">
        <CloseTheLoopButton />
        {/* <SecondaryButton className="h-9 w-34 bg-mint-950 text-white hover:bg-mint-800 transition-colors">
          Join Vendor Network
        </SecondaryButton> */}
      </div>
    </div>
  );
}
