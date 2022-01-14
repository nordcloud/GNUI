import * as React from "react";
import styled from "styled-components";
import { SVGIcon } from "..";
import { theme } from "../..";
import { useHideOnScroll, useHandleClickOutside } from "../../hooks";
import {
  Placement,
  Position,
  getStyle,
  Margin,
  DEFAULT_MARGIN,
} from "../../utils/position";
import { Button } from "../button";

type Props = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
  position?: Position;
  margin?: Margin;
  clickOutsideToClose?: boolean;
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
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    },
    [contentRef, triggerRef]
  );

  useHandleClickOutside({ handleClickOutside, clickOutsideToClose });

  const handleScroll = React.useCallback(() => {
    setOpen(false);
  }, []);

  useHideOnScroll({ handleScroll });

  if (content == null) {
    return null;
  }

  return (
    <>
      <TriggerWrapper ref={triggerRef} onClick={() => setOpen(!open)}>
        {trigger}
      </TriggerWrapper>
      <ContentWrapper
        ref={contentRef}
        visible={open}
        style={getStyle({
          wrapperDimensions: triggerDimensions,
          tooltipDimensions: contentDimensions,
          placement,
          position,
          margin,
        })}
      >
        {content}
      </ContentWrapper>
    </>
  );
}

const TriggerWrapper = styled.div`
  display: inline-block;
`;

type ContentProps = {
  visible: boolean;
};

const ContentWrapper = styled.div<ContentProps>`
  position: fixed;
  z-index: ${({ visible }) => (visible ? theme.zindex.sticky : 0)};
  transition: opacity 0.2s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
