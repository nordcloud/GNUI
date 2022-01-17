import styled from "styled-components";

export type Placement = "top" | "bottom" | "right" | "left";
export type Position = "start" | "end" | "center";

export type Margin = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type StyleProps = {
  wrapperDimensions: DOMRect | null;
  tooltipDimensions: DOMRect | null;
  placement: Placement;
  position: Position;
  margin?: Margin;
};

type ReqiuredStyleProps = StyleProps & {
  wrapperDimensions: DOMRect;
  tooltipDimensions: DOMRect;
};

export function getStyle({
  wrapperDimensions,
  tooltipDimensions,
  placement,
  position,
  margin,
}: StyleProps) {
  if (wrapperDimensions != null && tooltipDimensions != null) {
    const top = getTop({
      wrapperDimensions,
      tooltipDimensions,
      placement,
      position,
      margin,
    });
    const left = getLeft({
      wrapperDimensions,
      tooltipDimensions,
      placement,
      position,
      margin,
    });

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

  if (translation > 0) {
    return wrapperDimensions.left + absoluteTranslation / 2;
  } else {
    return wrapperDimensions.left - absoluteTranslation / 2;
  }
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

  if (translation > 0) {
    return wrapperDimensions.top + absoluteTranslation / 2;
  } else {
    return wrapperDimensions.top - absoluteTranslation / 2;
  }
}

function getVerticalAlignmentToEnd(
  wrapperDimensions: DOMRect,
  tooltipDimensions: DOMRect
) {
  return Math.abs(
    wrapperDimensions.top - tooltipDimensions.height + wrapperDimensions.height
  );
}

export const DEFAULT_MARGIN = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5,
};

type PaddingWrapperProps = Margin & { placement: Placement };

export const PaddingWrapper = styled.div<PaddingWrapperProps>`
  padding-top: ${(props) => getPaddingValue(props)};
  padding-bottom: ${(props) => getPaddingValue(props)};
  padding-left: ${(props) => getPaddingValue(props)};
  padding-right: ${(props) => getPaddingValue(props)};
`;

function getPaddingValue({
  top,
  bottom,
  left,
  right,
  placement,
}: PaddingWrapperProps) {
  switch (placement) {
    case "bottom":
      return top ? `${top}px` : "0";
    case "top":
      return bottom ? `${bottom}px` : "0";
    case "right":
      return left ? `${left}px` : "0";
    case "left":
      return right ? `${right}px` : "0";
  }
}
