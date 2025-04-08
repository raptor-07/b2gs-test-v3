"use client";

import { cn } from "../../utils/cn";
import IdeaCard from "./idea-card";

interface IdeasSectionProps {
  className?: string;
}

const backgroundClasses = ["bg-brown-200", "bg-brown-300", "bg-brown-400"];

const ideasData = [
  {
    heading: "Aligning Circularity",
    description:
      "Aligning circularity with your business drives progress while ensuring sustainability. We design circular solutions that address all your waste management needs, ensuring full regulatory compliance.",
    image: "/assets/idea-illustrations/circularity.png",
  },
  {
    heading: "Making Sustainability Visible",
    description:
      "Your Sustainability story deserves recognition. We'll help you deliver it to the customers who care.",
    image: "/assets/idea-illustrations/visibility.png",
  },
  {
    heading: "End-to-end Traceability",
    description:
      "From handover to processing, know exactly where your recyclables go with our end-to-end tracking and data insights.",
    image: "/assets/idea-illustrations/traceability.png",
  },
];

const IdeasSection: React.FC<IdeasSectionProps> = ({ className }) => {
  return (
    <section className={cn("relative font-lexend", className)}>
      <div className="relative overflow-hidden bg-brown-100 transform -mt-1">
        {ideasData.map((idea, index) => (
          <IdeaCard
            key={idea.heading}
            {...idea}
            backgroundColor={backgroundClasses[index]}
            className={index > 0 ? "-mt-4" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default IdeasSection;
