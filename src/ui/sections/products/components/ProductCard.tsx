import Image from "next/image";
import { Product } from "./ProductMain";

export default function ProductCard({
  product,
}: {
  product: Product[][number];
}) {
  return (
    <div className="grid grid-rows-[min-content_min-content] grid-cols-2 gap-8">
      {/* Title */}
      <h3 className="row-start-1 col-start-1 text-lg md:text-xl font-semibold text-mint-950">
        {product.title}
      </h3>
      {/* Illustration */}
      <div className="row-start-1 col-start-2 h-auto flex items-start justify-end">
        <Image
          src={product.cardImg}
          alt={product.title}
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      </div>
      {/* Subtitle & Bullets */}
      <div className="row-start-2 col-start-1 flex flex-col gap-1">
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
      <div className="row-start-2 col-start-2 flex items-end justify-end cursor-pointer">
        <a
          href={product.learnMore}
          className="text-mint-950 underline text-sm font-medium cursor-pointer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
