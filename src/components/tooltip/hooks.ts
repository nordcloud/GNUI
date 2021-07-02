import * as React from "react";

export function useTooltipHover() {
  const [isHovered, setIsHovered] = React.useState(false);
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
