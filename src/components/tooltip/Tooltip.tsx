import * as React from "react";
import { useTooltipHover } from "./hooks";
import { StyledTooltip, TooltipWrapper } from "./styles";

export type Props = {
  caption: React.ReactNode;
  position?: "left" | "right";
  bottom?: boolean;
  status?: "danger" | "notification" | "success" | "warning";
  children?: React.ReactNode;
  showTimeout?: number;
  hideTimeout?: number;
  minWidth?: string;
};

export function Tooltip({
  status,
  position,
  caption,
  bottom = false,
  children,
  hideTimeout = 100,
  showTimeout = 300,
  minWidth = "0",
}: Props) {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [tooltipPosition, setPosition] = React.useState({
    marginTop: 0,
    width: 0,
  });

  const { isHovered, updateIsHovered } = useTooltipHover();

  React.useEffect(() => {
    if (isHovered && tooltipRef.current instanceof HTMLDivElement) {
      const tooltipSize = tooltipRef.current.getBoundingClientRect();
      setPosition({
        marginTop: bottom
          ? tooltipSize.height - 12
          : -(tooltipSize.height + 12),
        width: tooltipSize.width,
      });
    }
    // Providing refs to dependency array of useEffect may cause unexpected problems
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]);

  const getStyle = () => {
    if (wrapperRef.current == null) {
      return;
    }

    if (position === "left") {
      return {
        marginTop: tooltipPosition.marginTop,
        left: wrapperRef.current.offsetLeft,
      };
    }

    if (position === "right") {
      return {
        marginTop: tooltipPosition.marginTop,
        left:
          wrapperRef.current.offsetLeft -
          (tooltipPosition.width - wrapperRef.current.offsetWidth),
      };
    }

    return {
      marginTop: tooltipPosition.marginTop,
      left: wrapperRef.current.offsetLeft,
      marginLeft: -(tooltipPosition.width - wrapperRef.current.offsetWidth) / 2,
    };
  };

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={() => updateIsHovered(true, showTimeout)}
      onMouseLeave={() => updateIsHovered(false, hideTimeout)}
    >
      {isHovered && (
        <StyledTooltip
          ref={tooltipRef}
          status={status}
          position={position}
          bottom={bottom}
          minWidth={minWidth}
          style={getStyle()}
        >
          {caption}
        </StyledTooltip>
      )}
      {children}
    </TooltipWrapper>
  );
}
