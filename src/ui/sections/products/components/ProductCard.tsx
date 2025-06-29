import Image from "next/image";
import { Product } from "./ProductMain";

export default function ProductCard({
  product,
}: {
  product: Product[][number];
}) {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-2 h-full">
      {/* Title */}
      <h3 className="row-start-1 col-start-1 text-lg md:text-xl font-semibold text-mint-950">
        {product.title}
      </h3>
      {/* Illustration */}
      <div className="row-start-1 col-start-2 flex items-start justify-end">
        <Image
          src={product.cardImg}
          alt={product.title}
          width={80}
          height={80}
          className="rounded-lg object-contain w-20 h-20"
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
      <div className="row-start-2 col-start-2 flex items-end justify-end">
        <a
          href={product.learnMore}
          className="text-mint-950 underline text-sm font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
