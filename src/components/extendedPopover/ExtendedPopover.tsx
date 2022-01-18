import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { useEvent } from "../../hooks";
import theme from "../../theme";
import {
  Placement,
  Position,
  getStyle,
  Margin,
  DEFAULT_MARGIN,
  PaddingWrapper,
} from "../../utils/position";
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
}: Props) {
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);
  const [contentDimensions, setContentDimensions] =
    React.useState<DOMRect | null>(null);
  const [triggerDimensions, setTriggerDimensions] =
    React.useState<DOMRect | null>(null);

  React.useEffect(() => {
    if (
      open &&
      contentRef.current instanceof HTMLDivElement &&
      triggerRef.current instanceof HTMLDivElement
    ) {
      setTriggerDimensions(triggerRef.current.getBoundingClientRect());
      setContentDimensions(contentRef.current.getBoundingClientRect());
    }
  }, [open]);

  const handleClickOutside = React.useCallback(
    (event) => {
      if (
        clickOutsideToClose &&
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    },
    [contentRef, triggerRef, clickOutsideToClose]
  );

  useEvent({ name: "click", handler: handleClickOutside, target: document });

  const handleScroll = React.useCallback(() => {
    setOpen(false);
  }, []);

  useEvent({ name: "scroll", handler: handleScroll });

  if (content == null) {
    return null;
  }

  const triggerProps = {
    ...(triggerOn === "click"
      ? {
          onClick: () => setOpen((prevState) => !prevState),
        }
      : {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => {
            if (closeOn === "hover") {
              setOpen(false);
            }
          },
        }),
  };

  const style = getStyle({
    wrapperDimensions: triggerDimensions,
    tooltipDimensions: contentDimensions,
    placement,
    position,
  });

  return (
    <TriggerWrapper ref={triggerRef} {...triggerProps}>
      {trigger}
      <Popover
        content={content}
        contentRef={contentRef}
        visible={open}
        style={style}
        margin={margin}
        placement={placement}
      />
    </TriggerWrapper>
  );
}

type PopoverProps = {
  content: React.ReactNode;
  contentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  style: { top?: number; left?: number };
  margin: Margin;
  placement: Placement;
};

function Popover({
  contentRef,
  visible,
  style,
  margin,
  content,
  placement,
}: PopoverProps) {
  return visible
    ? ReactDOM.createPortal(
        <ContentWrapper ref={contentRef} style={style}>
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

const ContentWrapper = styled.div`
  position: fixed;
  z-index: ${theme.zindex.sticky};
`;

export type ExtendedPopoverAction = "hover" | "click";
