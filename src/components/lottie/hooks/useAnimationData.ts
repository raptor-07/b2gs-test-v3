import { useState, useEffect } from "react";

// Global cache for animations
// const animationCache = new Map<string, object>();

export function useAnimationData(url: string) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    let mounted = true;
    
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (mounted) {
          setData(json);
        }
      })
      .catch((err) => console.error("Error loading animation:", err));

    return () => {
      mounted = false;
    };
  }, [url]); // Only depend on url changes

  return data;
}
