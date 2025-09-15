import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { useEvent } from "../../hooks";
import theme from "../../theme";
import {
  DEFAULT_MARGIN,
  Display,
  getStyle,
  Margin,
  Placement,
  Position,
  getViewportDimensions,
} from "../../utils/position";
import { useTooltipHover } from "../tooltip/hooks";

type Timeout = {
  showTimeout?: number;
  hideTimeout?: number;
};

type Status = "accent" | "danger" | "notification" | "success" | "warning";

export type ExtendedTooltipProps = Timeout & {
  caption: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  status?: Status;
  zIndex?: number;
  display?: Display;
  adjustPositionToViewportSize?: boolean;
};

export function ExtendedTooltip({
  caption,
  children,
  placement = "top",
  position = "center",
  status,
  showTimeout = 0,
  hideTimeout = 0,
  margin = DEFAULT_MARGIN,
  zIndex = theme.zindex.sticky,
  display,
  adjustPositionToViewportSize = false,
}: ExtendedTooltipProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const [viewportDimensions, setViewportDimensions] = React.useState(
    getViewportDimensions
  );

  React.useEffect(() => {
    function handleResize() {
      setViewportDimensions(getViewportDimensions());
    }

    if (adjustPositionToViewportSize) {
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }

    return () => {};
  }, [adjustPositionToViewportSize]);

  const { isHovered, updateIsHovered } = useTooltipHover();

  const [tooltipDimensions, setTooltipDimensions] =
    React.useState<DOMRect | null>(null);
  const [wrapperDimensions, setWrapperDimensions] =
    React.useState<DOMRect | null>(null);

  const handleScroll = React.useCallback(() => {
    updateIsHovered(false, 0);
  }, [updateIsHovered]);

  useEvent({ name: "scroll", handler: handleScroll });

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

  if (caption == null) {
    return <>{children}</>;
  }

  const style = {
    ...getStyle({
      wrapperDimensions,
      tooltipDimensions,
      viewportDimensions,
      placement,
      position,
      margin,
      adjustPositionToViewportSize,
    }),
    zIndex,
  };

  return (
    <TooltipWrapper
      ref={wrapperRef}
      display={display}
      onPointerEnter={() => updateIsHovered(true, showTimeout)}
      onPointerLeave={() => updateIsHovered(false, hideTimeout)}
    >
      <Tooltip
        isHovered={isHovered}
        caption={caption}
        tooltipRef={tooltipRef}
        status={status}
        style={style}
      />
      {children}
    </TooltipWrapper>
  );
}

type TooltipProps = {
  caption: React.ReactNode;
  isHovered: boolean;
  tooltipRef: React.RefObject<HTMLDivElement>;
  style: { top?: number; left?: number; zIndex?: number };
  status?: Status;
};

function Tooltip({
  caption,
  isHovered,
  tooltipRef,
  status,
  style,
}: TooltipProps) {
  const { zIndex = theme.zindex.sticky } = style;
  return isHovered
    ? ReactDOM.createPortal(
        <StyledTooltip
          ref={tooltipRef}
          status={status}
          style={style}
          zIndex={zIndex}
        >
          {caption}
        </StyledTooltip>,
        document.body
      )
    : null;
}

type StyledTooltipProps = Pick<ExtendedTooltipProps, "status" | "zIndex">;

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
  z-index: ${({ zIndex }) => zIndex};
  opacity: 0;
  animation: 0.2s ease-in-out both fadeIn;

  ${({ status }) => status && getColor(status)}

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export type TooltipWrapperProps = {
  display?: Display;
};

const TooltipWrapper = styled.div<TooltipWrapperProps>`
  display: ${({ display }) => (display ? display : "inline-block")};
`;

function getColor(status: Status) {
  return css`
    background-color: ${changeStatus(status)};
    color: ${theme.color.text.text04};
    &:after {
      border-top-color: ${changeStatus(status)};
    }
  `;
}

const changeStatus = (status?: Status) => {
  switch (status) {
    case "danger":
      return theme.color.interactive.error;
    case "warning":
      return theme.color.interactive.warning;
    case "success":
      return theme.color.interactive.success;
    case "notification":
      return theme.color.interactive.info;
    case "accent":
      return theme.color.interactive.accent;
    default:
      return theme.color.interactive.primary;
  }
};
