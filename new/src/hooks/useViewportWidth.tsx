import { useEffect, useState } from "react";

type ViewportType = "sm" | "md" | "lg";

/**
 * Returns the details of the viewport, in an object of 3 elements.
 * Element with key "viewportType" is viewport type, either:
 * - "sm" for 0px - 768px
 * - "md" for 768px - 1024px
 * - "lg" for 1024px and above.
 * Element with key "viewportWidth" is browser view width.
 * Element with key "viewportHeight" is browser view height.
 */
const useViewportDimensions = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [viewportType, setViewportType] = useState<ViewportType>("lg");

  useEffect(() => {
    const resizeListener = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
      if (window.innerWidth >= 1024) {
        setViewportType("lg");
      } else if (window.innerWidth >= 768) {
        setViewportType("md");
      } else {
        setViewportType("sm");
      }
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return {
    viewportWidth,
    viewportHeight,
    viewportType,
  };
};

export default useViewportDimensions;
