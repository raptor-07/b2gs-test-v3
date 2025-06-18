"use client";

import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";

export default function LottieEarthAnimation() {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    fetch("/assets/lottie/earth-lottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);

  return (
    <div className="w-[100%] sm:w-[75%] md:w-[45%] 3xl:w-[50%] lg:mx-auto">
      {animationData && (
        <Lottie
          loop={false}
          play
          animationData={animationData}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
