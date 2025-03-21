export interface SectorData {
  heading: string;
  illustration: string;
  points: string[];
}

export const sectorData: SectorData[] = [
  {
    heading: "Manufacturing",
    illustration: "/assets/sectors/manufacturing.png",
    points: [
      "Discover how your carbon footprint becomes a pathway to sustainable growth",
      "Learn to transform resource management into a competitive advantage",
      "Join the circular economy revolution and lead by example",
      "Turn waste reduction into measurable environmental impact"
    ]
  },
  {
    heading: "Retail Industries",
    illustration: "/assets/sectors/retail.png",
    points: [
      "Transform your retail space with smart recycling solutions",
      "Learn sustainable disposal practices that resonate with modern consumers",
      "Build a green retail identity that customers trust and admire",
      "Make sustainability a cornerstone of your brand story"
    ]
  },
  {
    heading: "Educational Organizations",
    illustration: "/assets/sectors/edu-orgs.png",
    points: [
      "Empower your institution to become a beacon of sustainability",
      "Create hands-on learning experiences through waste management",
      "Inspire the next generation with practical sustainability education",
      "Be part of a growing network of eco-conscious educational leaders"
    ]
  },
  {
    heading: "Metal Source Import",
    illustration: "/assets/sectors/global.png",
    points: [
      "Navigate global waste management with confidence and clarity",
      "Experience seamless, traceable cross-border recycling solutions",
      "Learn how compliance becomes your competitive advantage",
      "Discover the power of end-to-end waste tracking in global trade"
    ]
  }
];

export interface CarouselContext {
  activeIndex: number;
  direction: 1 | -1;
}
