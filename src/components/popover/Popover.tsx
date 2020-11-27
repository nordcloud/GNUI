import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { useClickOutside } from "../../hooks";
import { Box } from "../box";

type ContentData = {
  isVisible: boolean;
  [x: string]: any;
};

type PopoverProps = {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  alignRight?: boolean;
};

const StyledPopover = styled.div`
  display: inline-block;
  position: relative;
`;

const Content = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: ${theme.zindex.dropdown};
  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;
  margin-top: ${theme.spacing.spacing01};
  ${({ isVisible }: ContentData) =>
    isVisible &&
    `
    visibility: visible;
    opacity: 1;
  `}
  ${({ alignRight }: PopoverProps) =>
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

export const Popover = ({ children, trigger, alignRight }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  const wrapper = React.useRef<HTMLDivElement>(null);

  useClickOutside(wrapper, isVisible, () => {
    setIsVisible(false);
  });

  return (
    <StyledPopover ref={wrapper}>
      <StyledTrigger className="Popover-trigger" onClick={toggle}>
        {trigger}
      </StyledTrigger>
      <Content isVisible={isVisible} alignRight={alignRight}>
        <Box innerSpacing="spacing03" shadow="shadow04">
          {children}
        </Box>
      </Content>
    </StyledPopover>
  );
};
