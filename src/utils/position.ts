import styled from "styled-components";

export type Placement = "bottom" | "left" | "right" | "top";
export type Position = "center" | "end" | "start";
export type Display = "inline-block" | "inline-grid";

export type Margin = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type ViewportDimensions = {
  width: number;
  height: number;
};

type StyleProps = {
  wrapperDimensions: DOMRect | null;
  tooltipDimensions: DOMRect | null;
  viewportDimensions: ViewportDimensions;
  placement: Placement;
  position: Position;
  margin?: Margin;
  adjustPositionToViewportSize?: boolean;
};

type ReqiuredStyleProps = StyleProps & {
  wrapperDimensions: DOMRect;
  tooltipDimensions: DOMRect;
};

export function getStyle({
  wrapperDimensions,
  tooltipDimensions,
  viewportDimensions,
  placement,
  position,
  margin,
  adjustPositionToViewportSize,
}: StyleProps) {
  if (wrapperDimensions != null && tooltipDimensions != null) {
    const top = getTop({
      wrapperDimensions,
      tooltipDimensions,
      viewportDimensions,
      placement,
      position,
      margin,
    });
    const left = getLeft({
      wrapperDimensions,
      tooltipDimensions,
      viewportDimensions,
      placement,
      position,
      margin,
    });

    if (adjustPositionToViewportSize) {
      const adjustToViewport = adjustPositionToViewportDimensions(
        { top, left },
        tooltipDimensions,
        viewportDimensions
      );

      const adjustedTop = top + adjustToViewport.top;
      const adjustedLeft = left + adjustToViewport.left;

      return { top: adjustedTop, left: adjustedLeft };
    }

    return { top, left };
  }

  return {};
}

function getTop({
  wrapperDimensions,
  tooltipDimensions,
  placement,
  position,
  margin,
}: ReqiuredStyleProps) {
  if (placement === "top") {
    return (
      wrapperDimensions.top - tooltipDimensions.height - (margin?.top ?? 0)
    );
  }

  if (placement === "bottom") {
    return (
      wrapperDimensions.top + wrapperDimensions.height + (margin?.bottom ?? 0)
    );
  }

  if (position === "center") {
    return getVerticalAlignmentToCenter(wrapperDimensions, tooltipDimensions);
  }

  if (position === "end") {
    return getVerticalAlignmentToEnd(wrapperDimensions, tooltipDimensions);
  }

  return wrapperDimensions.top;
}

function getLeft({
  wrapperDimensions,
  tooltipDimensions,
  placement,
  position,
  margin,
}: ReqiuredStyleProps) {
  if (placement === "left") {
    return (
      wrapperDimensions.left - tooltipDimensions.width - (margin?.left ?? 0)
    );
  }

  if (placement === "right") {
    return (
      wrapperDimensions.left + wrapperDimensions.width + (margin?.right ?? 0)
    );
  }

  if (position === "center") {
    return getHorizontalAlignmentToCenter(wrapperDimensions, tooltipDimensions);
  }

  if (position === "end") {
    return getHorizontalAlignmentToEnd(wrapperDimensions, tooltipDimensions);
  }

  return wrapperDimensions.left;
}

function getHorizontalAlignmentToCenter(
  wrapperDimensions: DOMRect,
  tooltipDimensions: DOMRect
) {
  const translation = wrapperDimensions.width - tooltipDimensions.width;
  const absoluteTranslation = Math.abs(translation);

  return translation > 0
    ? wrapperDimensions.left + absoluteTranslation / 2
    : wrapperDimensions.left - absoluteTranslation / 2;
}

function getHorizontalAlignmentToEnd(
  wrapperDimensions: DOMRect,
  tooltipDimensions: DOMRect
) {
  return Math.abs(
    wrapperDimensions.left - tooltipDimensions.width + wrapperDimensions.width
  );
}

function getVerticalAlignmentToCenter(
  wrapperDimensions: DOMRect,
  tooltipDimensions: DOMRect
) {
  const translation = wrapperDimensions.height - tooltipDimensions.height;
  const absoluteTranslation = Math.abs(translation);

  return translation > 0
    ? wrapperDimensions.top + absoluteTranslation / 2
    : wrapperDimensions.top - absoluteTranslation / 2;
}

function getVerticalAlignmentToEnd(
  wrapperDimensions: DOMRect,
  tooltipDimensions: DOMRect
) {
  return Math.abs(
    wrapperDimensions.top - tooltipDimensions.height + wrapperDimensions.height
  );
}

function adjustPositionToViewportDimensions(
  style: { top: number; left: number },
  tooltipDimensions: DOMRect,
  viewportDimensions: ViewportDimensions
) {
  const adjustTop = adjustTopToViewportDimensions(
    style,
    tooltipDimensions,
    viewportDimensions
  );
  const adjustLeft = adjustLeftToViewportDimensions(
    style,
    tooltipDimensions,
    viewportDimensions
  );

  return { top: adjustTop, left: adjustLeft };
}

function adjustTopToViewportDimensions(
  style: { top: number; left: number },
  tooltipDimensions: DOMRect,
  viewportDimensions: ViewportDimensions
) {
  if (style.top < 0) {
    return 0 - style.top;
  }

  const tooltipBottom = style.top + tooltipDimensions.height;

  if (tooltipBottom > viewportDimensions.height) {
    return viewportDimensions.height - tooltipBottom;
  }

  return 0;
}

function adjustLeftToViewportDimensions(
  style: { top: number; left: number },
  tooltipDimensions: DOMRect,
  viewportDimensions: ViewportDimensions
) {
  if (style.left < 0) {
    return 0 - style.left;
  }

  const tooltipRight = style.left + tooltipDimensions.width;

  if (tooltipRight > viewportDimensions.width) {
    return viewportDimensions.width - tooltipRight;
  }

  return 0;
}

export const DEFAULT_MARGIN = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5,
};

type PaddingWrapperProps = Margin & { placement: Placement };

export const PaddingWrapper = styled.div<PaddingWrapperProps>`
  padding: ${(props) => getPaddingValue(props)};
`;

function getPaddingValue({
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  placement,
}: PaddingWrapperProps) {
  switch (placement) {
    case "bottom":
      return `${top}px 0 0 0`;
    case "top":
      return `0 0 ${bottom}px 0`;
    case "right":
      return `0 0 0 ${left}px`;
    case "left":
      return `0 ${right}px 0 0`;
    default:
      return "";
  }
}
