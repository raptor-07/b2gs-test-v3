import { useState, useEffect } from "react";

export function useAnimationData(url: string) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error("Error loading animation:", err));

    return () => {};
  }, [url]);

  return data;
}
