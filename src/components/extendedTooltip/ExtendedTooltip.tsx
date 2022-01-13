import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "../..";
import { getStyle, Margin, Placement, Position } from "../../utils/position";
import { setColor } from "../../utils/setcolor";
import { useTooltipHover } from "../tooltip/hooks";

type Timeout = {
  showTimeout?: number;
  hideTimeout?: number;
};

type Props = Timeout & {
  caption: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  status?: "danger" | "warning" | "success" | "notification";
};

export function ExtendedTooltip({
  caption,
  children,
  placement = "top",
  position = "center",
  status,
  showTimeout = 0,
  hideTimeout = 0,
  margin = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  },
}: Props) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const { isHovered, updateIsHovered } = useTooltipHover();

  const [tooltipDimensions, setTooltipDimensions] =
    React.useState<DOMRect | null>(null);
  const [wrapperDimensions, setWrapperDimensions] =
    React.useState<DOMRect | null>(null);

  const handleScroll = React.useCallback(() => {
    updateIsHovered(false, 0);
  }, []);

  React.useEffect(() => {
    if (
      isHovered &&
      tooltipRef.current instanceof HTMLDivElement &&
      wrapperRef.current instanceof HTMLDivElement
    ) {
      setTooltipDimensions(tooltipRef.current.getBoundingClientRect());
      setWrapperDimensions(wrapperRef.current.getBoundingClientRect());
    }
  }, [isHovered]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (caption == null) {
    console.warn(`Cannot render tooltip without caption prop.`);
    return <>{children}</>;
  }

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
          style={getStyle({
            wrapperDimensions,
            tooltipDimensions,
            placement,
            position,
            margin,
          })}
        >
          {caption}
        </StyledTooltip>
      )}
      {children}
    </TooltipWrapper>
  );
}

type StyledTooltipProps = Pick<Props, "status">;

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: fixed;
  min-width: 0;
  max-width: 16rem;
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: ${theme.color.background.ui05};
  color: ${theme.color.text.text04};
  border-radius: ${theme.radius.md};
  z-index: ${theme.zindex.sticky};
  opacity: 0;
  animation: 0.2s ease-in-out both fadeIn;

  ${({ status }) =>
    status &&
    css`
      background-color: ${setColor(status)};
      color: ${theme.color.text.text01};
      &:after {
        border-top-color: ${setColor(status)};
      }
    `}

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const TooltipWrapper = styled.div`
  display: inline-block;
`;
