import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container } from "../container";
import { Text } from "../text";
import { Button } from "../button";

const SidebarMenu = styled(Container)`
  top: 0;
  right: 0;
  position: absolute;
  height: 100vh;
  z-index: 100;
  border-radius: 0;
  width: 0;
  border: ${theme.borders.disabled};
  background-color: ${theme.colors.lights[1]};
  box-shadow: 0 2px 5px ${theme.colors.darks[4]};
  transition: all 0.4s ease;
`;

const SidebarButton = styled(Button)<any>`
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 100;
`;

const SidebarTitle = styled(Text)`
  line-height: 1.5rem;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
`;

const SidebarContent = styled(SidebarTitle)`
  font-weight: initial;
`;

const Wrapper: any = styled(Container).attrs((props) => ({
  isOpen: props.isOpen,
}))`
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: transparent;
  transition: all 0.4s ease;

  & ${SidebarMenu} {
    width: ${(props) => (props.isOpen ? "567px" : 0)};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: rgba(0, 0, 0, 0.4);
      transition: all 0.4s;
    `}
`;

interface SidebarProps {
  children?: React.ReactNode;
  title?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
  title,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper isOpen={isOpen} {...props}>
      <Wrapper.menu>
        <Wrapper.title>{title}</Wrapper.title>
        <Wrapper.content>{children}</Wrapper.content>
      </Wrapper.menu>
      <Wrapper.button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </Wrapper.button>
    </Wrapper>
  );
};

Wrapper.button = SidebarButton;
Wrapper.menu = SidebarMenu;
Wrapper.title = SidebarTitle;
Wrapper.content = SidebarContent;

export default Sidebar;
