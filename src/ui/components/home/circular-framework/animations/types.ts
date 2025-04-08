export interface StepData {
  id: string;
  number: string;
  title: string;
  points: string[];
  staticImage: {
    src: string;
    alt: string;
  };
  mobileImage: {
    src: string;
    alt: string;
  };
  animation: {
    src: string;
  };
  useJsonAnimation?: boolean;
}

export const STEPS_DATA: StepData[] = [
  {
    id: "collection",
    number: "01",
    title: "Collection",
    points: [
      "Diverse electric vehicle solutions supporting low-emission pickups and logistics.",
      "SaaS-driven scheduling offers complete customer transparency and tracking.",
      "Sustainable material collection designed to lower emissions.",
      "Real-time tracking and monitoring of collection vehicles.",
    ],
    staticImage: {
      src: "/assets/framework/illustrations/desktop/collection.jpg",
      alt: "Collection Process",
    },
    mobileImage: {
      src: "/assets/framework/illustrations/mobile/collection.png",
      alt: "Collection Process Mobile",
    },
    animation: {
      src: "/assets/framework/lottie/json/collection.json",
    },
    useJsonAnimation: true,
  },
  {
    id: "processing",
    number: "02",
    title: "Processing",
    points: [
      "Eco-friendly recycling methods optimized for cost and resource efficiency.",
      "Vendor profiling and analysis to ensure accountability and responsibility.",
      "Centralized monitoring system, capturing vendor details, emissions, and volume data.",
      "Comprehensive carbon emission accounting for the entire process.",
    ],
    staticImage: {
      src: "/assets/framework/illustrations/desktop/processing.jpg",
      alt: "Processing Stage",
    },
    mobileImage: {
      src: "/assets/framework/illustrations/mobile/processing.png",
      alt: "Processing Stage Mobile",
    },
    animation: {
      src: "/assets/framework/lottie/json/processing.json",
    },
    useJsonAnimation: true,
  },
  {
    id: "distribution",
    number: "03",
    title: "Distribution",
    points: [
      "Green-certified, low-emission products made with recycled materials.",
      "Dedicated marketplace facilitating transactions for recycled goods.",
      "Platform-driven green commerce in commodities by showcasing sustainable vendors.",
      "Established distribution network for recycled products from sustainable vendors.",
    ],
    staticImage: {
      src: "/assets/framework/illustrations/desktop/distribution.jpg",
      alt: "Distribution Network",
    },
    mobileImage: {
      src: "/assets/framework/illustrations/mobile/distribution.png",
      alt: "Distribution Network Mobile",
    },
    animation: {
      src: "/assets/framework/lottie/json/distribution.json",
    },
    useJsonAnimation: true,
  },
  {
    id: "compliance",
    number: "04",
    title: "Compliance",
    points: [
      "Certified Integration into the circular economy.",
      "Certified adherence to modern, compliant waste management practices.",
      "Comprehensive EPR solutions for all materials, including non-ferrous metals, with support for EPR Credits.",
      "Effortless regulatory compliance management, allowing you to focus on your business.",
    ],
    staticImage: {
      src: "/assets/framework/illustrations/desktop/accreditation.jpg",
      alt: "Accreditation Process",
    },
    mobileImage: {
      src: "/assets/framework/illustrations/mobile/accreditation.png",
      alt: "Accreditation Process Mobile",
    },
    animation: {
      src: "/assets/framework/lottie/json/accreditation.json",
    },
    useJsonAnimation: true,
  },
];
