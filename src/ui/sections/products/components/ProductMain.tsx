import { LottieFilesPlayer } from "@/components/lottie/client/LottieFilesPlayer";
import ProductCard from "./ProductCard";

export type Product = {
  key: string;
  name: string;
  lottie: string;
  placeholder: string;
  cardImg: string;
  title: string;
  features: string[];
  learnMore: string;
};
const PRODUCTS: Product[] = [
  {
    key: "green-compass-dashboard",
    name: "Green Compass Dashboard",
    lottie: "/assets/lottie/products/green-compass-dashboard.json",
    placeholder: "/assets/products/placeholder/green-compass-dashboard.svg",
    cardImg: "/assets/products/product-sigil/green-compass-dashboard.svg",
    title: "Green Compass Dashboard",
    features: [
      "Real-time waste tracking and analytics",
      "Automated compliance reporting",
      "Customizable sustainability KPIs",
      "Seamless integration with ERP systems",
      "Intuitive, actionable dashboards",
    ],
    learnMore: "#",
  },
  {
    key: "eco-loop-recycling",
    name: "Eco-Loop Recycling",
    lottie: "/assets/lottie/products/eco-loop-recycling.json",
    placeholder: "/assets/products/placeholder/eco-loop-recycling.svg",
    cardImg: "/assets/products/product-sigil/eco-loop-recycling.svg",
    title: "Eco-Loop Recycling",
    features: [
      "Closed-loop recycling process management",
      "Material traceability across lifecycle",
      "Automated pickup scheduling",
      "Vendor and recycler collaboration tools",
    ],
    learnMore: "#",
  },
  {
    key: "green-marketplace",
    name: "Green Marketplace",
    lottie: "/assets/lottie/products/green-marketplace.json",
    placeholder: "/assets/products/placeholder/green-marketplace.svg",
    cardImg: "/assets/products/product-sigil/green-marketplace.svg",
    title: "Green Marketplace",
    features: [
      "Verified scrap trading platform",
      "Dynamic pricing and bidding",
      "Secure payment and logistics integration",
      "Marketplace analytics and insights",
    ],
    learnMore: "#",
  },
  {
    key: "compliance-assistant",
    name: "Compliance Assistant",
    lottie: "/assets/lottie/products/compliance-assistant.json",
    placeholder: "/assets/products/placeholder/compliance-assistant.svg",
    cardImg: "/assets/products/product-sigil/compliance-assistant.svg",
    title: "Compliance Assistant",
    features: [
      "Automated regulatory updates",
      "Document management and reminders",
      "Audit-ready compliance logs",
      "Multi-region support",
    ],
    learnMore: "#",
  },
];

export { PRODUCTS };

export default function ProductMain({
  product,
}: {
  product: (typeof PRODUCTS)[number];
}) {
  return (
    <div className="grid grid-rows-[auto_auto] md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 h-full">
      {/* Product Card */}
      <div
        className="order-1 md:order-none lg:p-6 rounded-xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-800 relative overflow-hidden shadow-md hover:shadow-lg hover:border-gray-200 will-change-transform"
        style={{
          background:
            "linear-gradient(179.959deg, #DDDDDD 0%, rgba(255, 255, 255, 10%) 100%)",
          willChange: "transform",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/assets/textures/grainy-gray.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
        />
        <ProductCard product={product} />
      </div>
      {/* Lottie Animation */}
      <div className="order-2 md:order-none flex items-center justify-center h-auto">
        <div className="w-full max-w-[500px] flex items-center justify-center h-auto">
          <LottieFilesPlayer
            src={product.lottie}
            placeholderImage={product.placeholder}
            isInteractive={false}
            autoplay={true}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
