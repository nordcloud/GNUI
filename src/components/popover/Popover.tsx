import * as React from "react";
import styled from "styled-components";
import { useClickOutside, useDisclosure } from "../../hooks";
import theme from "../../theme";
import { Box } from "../box";

type PopoverProps = {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  alignRight?: boolean;
};

const StyledPopover = styled.div`
  display: inline-block;
  position: relative;
`;

const Content = styled.div<{ isVisible: boolean; alignRight?: boolean }>`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: ${theme.zindex.dropdown};
  transition:
    visibility 0.1s ease-out,
    opacity 0.1s ease-out;
  margin-top: ${theme.spacing.spacing01};

  ${({ isVisible }) =>
    isVisible &&
    `
    visibility: visible;
    opacity: 1;
  `}

  ${({ alignRight }) =>
    alignRight &&
    `
      right: 0;
      &>div {
        text-align: right;
      }
    `}
`;

const StyledTrigger = styled.div`
  position: relative;
  cursor: pointer;
`;

export function Popover({ children, trigger, alignRight }: PopoverProps) {
  const {
    isOpen: isVisible,
    close,
    toggle: toggleVisibility,
  } = useDisclosure();
  const wrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside({ ref: wrapper, active: isVisible, onClickAway: close });

  return (
    <StyledPopover ref={wrapper}>
      <StyledTrigger
        className="Popover-trigger"
        onClick={() => toggleVisibility()}
      >
        {trigger}
      </StyledTrigger>
      <Content isVisible={isVisible} alignRight={alignRight}>
        <Box innerSpacing="spacing03" shadow="shadow04">
          {children}
        </Box>
      </Content>
    </StyledPopover>
  );
}
