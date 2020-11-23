import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { useClickOutside } from "../../hooks";

type PopoverProps = {
  children?: React.ReactNode;
  Trigger?: React.ReactComponentElement<any>;
};

const StyledPopover = styled.div`
  display: inline-block;
`;

const Content = styled.div<any>`
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: ${theme.zindex.dropdown};
  box-shadow: ${theme.shadow.shadow02};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.spacing04};
  transition: visibility 0.1s ease-out, opacity 0.1s ease-out;
  margin-top: ${theme.spacing.spacing01};

  ${({ isVisible }: any) =>
    isVisible &&
    `
    visibility: visible;
    opacity: 1;
  `}
`;

const StyledTrigger = styled.div`
  position: relative;
  cursor: pointer;
`;

const Popover = ({ children, Trigger }: PopoverProps) => {
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
        <Trigger />
      </StyledTrigger>
      <Content isVisible={isVisible}>{children}</Content>
    </StyledPopover>
  );
};

export default Popover;
