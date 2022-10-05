import * as React from "react";
import { useDisclosure } from "../../hooks";

export function useTooltipHover() {
  const { isOpen: isHovered, toggle: setIsHovered } = useDisclosure(false);
  const timerRef = React.useRef(-1);

  const updateIsHovered = (value: boolean, timeout: number) => {
    window.clearTimeout(timerRef.current);

    const timer = window.setTimeout(() => {
      setIsHovered(value);
    }, timeout);

    timerRef.current = timer;
  };

  React.useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, []);

  return {
    isHovered,
    updateIsHovered,
  };
}
