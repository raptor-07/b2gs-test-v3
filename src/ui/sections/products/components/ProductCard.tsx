import Image from "next/image";
import { Product } from "./ProductMain";

export default function ProductCard({
  product,
}: {
  product: Product[][number];
}) {
  return (
    <div className="grid grid-rows-[auto_auto_auto] grid-cols-2 md:grid-rows-[min-content_min-content] md:grid-cols-2 gap-4 md:gap-8 p-2 md:p-0">
      {/* Title */}
      <h3 className="row-start-1 col-start-1 md:row-start-1 md:col-start-1 text-md md:text-xl font-semibold text-mint-950">
        {product.title}
      </h3>
      {/* Illustration */}
      <div className="row-start-1 col-start-2 md:row-start-1 md:col-start-2 h-auto flex items-start justify-end">
        <Image
          src={product.cardImg}
          alt={product.title}
          width={96}
          height={96}
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
        />
      </div>
      {/* Subtitle & Bullets */}
      <div className="row-start-2 col-start-1 col-span-2 md:row-start-2 md:col-start-1 md:col-span-1 flex flex-col gap-1">
        <span className="text-mint-950 text-sm font-semibold">Features</span>
        <ul className="list-disc pl-4 space-y-1">
          {product.features.map((f, i) => (
            <li key={i} className="text-mint-950 text-sm">
              {f}
            </li>
          ))}
        </ul>
      </div>
      {/* Learn More */}
      <div className="row-start-3 col-start-1 col-span-2 md:row-start-2 md:col-start-2 md:col-span-1 flex items-end justify-end">
        <a
          href={product.learnMore}
          className="text-mint-950 underline text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
          tabIndex={0}
          aria-label={`Learn more about ${product.title}`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
