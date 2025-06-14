import { useState, useEffect, useMemo } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useMemo(() => () => window.innerWidth <= 768, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIsMobile]);

  return isMobile;
};

export default useIsMobile;
