import { useState, useEffect } from "react";
import { getViewportDimensions } from "../utils/position";

export function useViewportDimensions(addResizeListener: boolean) {
  const [viewportDimensions, setViewportDimensions] = useState(
    getViewportDimensions
  );

  useEffect(() => {
    function handleResize() {
      setViewportDimensions(getViewportDimensions());
    }
    if (addResizeListener) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    return () => {};
  }, [addResizeListener]);
  return viewportDimensions;
}
