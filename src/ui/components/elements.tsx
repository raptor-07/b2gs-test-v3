import React from "react";
import Image from "next/image";

interface ElementProps {
  className?: string;
}

export const Aluminum: React.FC<ElementProps> = ({ className }) => {
  return (
    <Image
      className={className}
      src="/assets/elements/al.png"
      alt="Aluminum Element"
      width={1048}
      height={1048}
    />
  );
};

export const Nickel: React.FC<ElementProps> = ({ className }) => {
  return (
    <Image
      className={className}
      src="/assets/elements/ni.png"
      alt="Nickel Element"
      width={1048}
      height={1048}
    />
  );
};

export const Copper: React.FC<ElementProps> = ({ className }) => {
  return (
    <Image
      className={className}
      src="/assets/elements/cu.png"
      alt="Copper Element"
      width={1048}
      height={1048}
    />
  );
};

const Elements = {
  Aluminum,
  Nickel,
  Copper,
};

export default Elements;
