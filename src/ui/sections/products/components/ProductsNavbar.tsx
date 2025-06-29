import { Product } from "./ProductMain";

export default function ProductsNavbar({
  products,
  activeIdx,
  onSelect,
}: {
  products: Product[];
  activeIdx: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full px-1 md:flex md:gap-4 md:justify-center md:overflow-x-auto md:whitespace-nowrap">
      {products.map((p, idx) => (
        <button
          key={p.key}
          className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 border
            ${
              activeIdx === idx
                ? "bg-green-500 text-gray-100 border-green-500 hover:bg-green-600 hover:text-white"
                : "bg-gray-100 text-green-500 border-gray-300 hover:bg-gray-200 hover:text-green-800"
            }`}
          onClick={() => onSelect(idx)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
