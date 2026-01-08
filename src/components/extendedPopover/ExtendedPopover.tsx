import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { useDisclosure, useEvent, useViewportDimensions } from "../../hooks";
import theme from "../../theme";
import {
  Placement,
  Position,
  getStyle,
  Margin,
  DEFAULT_MARGIN,
  PaddingWrapper,
  OUTSIDE_VIEWPORT_STYLE,
} from "../../utils/position";
import { throttle } from "../../utils/throttle";
import { Button } from "../button";
import { SVGIcon } from "../svgicon";

type Props = {
  content: React.ReactNode;
  trigger?: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  clickOutsideToClose?: boolean;
  triggerOn?: ExtendedPopoverAction;
  closeOn?: ExtendedPopoverAction;
  adjustPositionToViewportSize?: boolean;
  zIndex?: number;
};

export function ExtendedPopover({
  trigger = (
    <Button size="sm">
      <SVGIcon size="sm" name="burgerMenu" />
    </Button>
  ),
  content,
  placement = "right",
  position = "start",
  clickOutsideToClose = true,
  margin = DEFAULT_MARGIN,
  triggerOn = "click",
  closeOn = "click",
  adjustPositionToViewportSize = false,
  zIndex = theme.zindex.sticky,
}: Props) {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const { isOpen, close, open, toggle } = useDisclosure();
  const [contentDimensions, setContentDimensions] =
    React.useState<DOMRect | null>(null);
  const [triggerDimensions, setTriggerDimensions] =
    React.useState<DOMRect | null>(null);

  const viewportDimensions = useViewportDimensions(
    adjustPositionToViewportSize
  );

  function closePopover() {
    close();
    setTriggerDimensions(null);
    setContentDimensions(null);
  }

  React.useEffect(() => {
    if (
      isOpen &&
      contentRef.current instanceof HTMLDivElement &&
      triggerRef.current instanceof HTMLDivElement
    ) {
      setTriggerDimensions(triggerRef.current.getBoundingClientRect());
      setContentDimensions(contentRef.current.getBoundingClientRect());
    }
  }, [isOpen]);

  const handleClickOutside = React.useCallback(
    (event: Event) => {
      if (
        clickOutsideToClose &&
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        closePopover();
      }
    },
    [contentRef, triggerRef, clickOutsideToClose]
  );

  useEvent({ name: "click", handler: handleClickOutside, target: document });

  const handleScroll = throttle(
    React.useCallback(() => {
      closePopover();
    }, [])
  );

  useEvent({ name: "scroll", handler: handleScroll });

  if (content == null) {
    return null;
  }

  const triggerProps = {
    ...(triggerOn === "click"
      ? {
          onClick: () => toggle(),
        }
      : {
          onMouseEnter: () => open(),
          onMouseLeave: () => {
            if (closeOn === "hover") {
              closePopover();
            }
          },
        }),
  };

  const style = {
    ...getStyle({
      wrapperDimensions: triggerDimensions,
      tooltipDimensions: contentDimensions,
      viewportDimensions,
      placement,
      position,
      adjustPositionToViewportSize,
    }),
    zIndex,
  };

  return (
    <TriggerWrapper ref={triggerRef} {...triggerProps}>
      {trigger}
      <Popover
        content={content}
        contentRef={contentRef}
        visible={isOpen}
        style={style}
        margin={margin}
        placement={placement}
        zIndex={zIndex}
      />
    </TriggerWrapper>
  );
}

type PopoverProps = {
  content: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  style: { top?: number; left?: number; zIndex?: number };
  margin: Margin;
  placement: Placement;
  zIndex: number;
};

function Popover({
  contentRef,
  visible,
  style,
  margin,
  content,
  placement,
  zIndex,
}: PopoverProps) {
  // on empty style render popover outside viewport to prevent blinking effect
  const positionStyle =
    style.top != null && style.left != null
      ? style
      : { ...OUTSIDE_VIEWPORT_STYLE, zIndex };

  return visible
    ? ReactDOM.createPortal(
        <ContentWrapper ref={contentRef} style={positionStyle} zIndex={zIndex}>
          <PaddingWrapper {...margin} placement={placement}>
            {content}
          </PaddingWrapper>
        </ContentWrapper>,
        document.body
      )
    : null;
}

const TriggerWrapper = styled.div`
  display: inline-block;
`;

const ContentWrapper = styled.div<{ zIndex: number }>`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
`;

export type ExtendedPopoverAction = "click" | "hover";
