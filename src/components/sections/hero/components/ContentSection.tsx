import { GradientText } from './GradientText';

export function ContentSection() {
  return (
    <div className="flex flex-col gap-6">
      {/* Tagline */}
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-mint-950 leading-tight">
        CHampion <GradientText>Circular Economy</GradientText>, One Scrap at a Time.
      </h1>

      {/* SubTag */}
      <h2 className="text-xl lg:text-2xl font-ibm italic text-mint-950">
        Waste Management: Measured, Monetized and Compliant!
      </h2>

      {/* Description */}
      <p className="text-base lg:text-lg text-mint-950 max-w-2xl">
        We seamlessly integrate Circularity Systems into any business, effectively lowering its costs and emissions while fulfilling regulations & compliance.
        <br /><br />
        Are you a recycler or a trader? Join our vendor network Today!
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="px-6 py-3 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors">
          Let&apos;s Close the Loop
        </button>
        <button className="px-6 py-3 border-2 border-mint-600 text-mint-600 rounded-lg hover:bg-mint-50 transition-colors">
          Become a Partner
        </button>
      </div>
    </div>
  );
}
