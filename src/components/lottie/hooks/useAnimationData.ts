import { useState, useEffect } from "react";

// Global cache for animations
const animationCache = new Map<string, object>();

export function useAnimationData(url: string) {
  const [data, setData] = useState<object | null>(() => animationCache.get(url) || null);

  useEffect(() => {
    if (!data) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          animationCache.set(url, json);
          setData(json);
        })
        .catch((err) => console.error("Error loading animation:", err));
    }
  }, [url, data]);

  return data;
}
