interface Material {
  name: string;
  image: string;
}

export const scrapMaterials: Material[] = [
  {
    name: "Aluminium Zorba",
    image: "/assets/scrap-materials/aluminium-zorba.png",
  },
  { name: "Aluminium", image: "/assets/scrap-materials/aluminium.png" },
  { name: "Armature", image: "/assets/scrap-materials/armeture.png" },
  { name: "Battery", image: "/assets/scrap-materials/battery.png" },
  { name: "Copper", image: "/assets/scrap-materials/copper.png" },
  { name: "Motors", image: "/assets/scrap-materials/motors.png" },
  { name: "Iron", image: "/assets/scrap-materials/iron.png" },
  {
    name: "Metal Turnings",
    image: "/assets/scrap-materials/metal-turnings.png",
  },
  { name: "Mixed Scrap", image: "/assets/scrap-materials/mix-scrap.png" },
  {
    name: "Stainless Steel",
    image: "/assets/scrap-materials/stainless-steel.png",
  },
  { name: "Tin Cans", image: "/assets/scrap-materials/tin-cans.png" },
];

export type { Material };
