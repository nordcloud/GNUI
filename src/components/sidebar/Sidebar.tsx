import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme, { bp } from "../../theme";
import { Container } from "../container";
import { Text } from "../text";
import { Button } from "../button";
import { Icon } from "../icon";

const SidebarMenu = styled(Container)`
  top: 0;
  right: 0;
  border-radius: 0;
  width: 0;
  height: 100vh;
  z-index: 100;
  position: absolute;
  border-left: ${theme.borders.disabled};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.shadow04};
  transition: all 0.4s ease-in-out;
`;

const SidebarButton = styled(Button)<any>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
`;

const SidebarTitle = styled(Text)`
  line-height: 1.5rem;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
  border-bottom: ${theme.borders.grey};
`;

const SidebarContent = styled(Text)`
  font-weight: ${theme.fontWeights[0]};
  line-height: 1.5rem;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
`;

const Wrapper: any = styled(Container)<{ isOpen: boolean }>`
  & ${SidebarMenu} {
    width: 0;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: scroll;
      background-color: rgba(0, 0, 0, 0.6);
      transition: all 0.4s ease-in-out;

      & ${SidebarMenu} {
        width: 100%;
        ${bp("sm")`width: 50%`};
        ${bp("md")`width: 40%`}
      }

      & ${SidebarButton} {
        position: absolute;
        right: 0.5rem;
        transition: all 0.4s ease-in-out;
      }
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
      <Wrapper.button severity="low" onClick={() => setIsOpen(!isOpen)}>
        <Icon
          width="1.25rem"
          height="1.25rem"
          image={isOpen ? "CLOSE_SIDEBAR" : "OPEN_SIDEBAR"}
        />
      </Wrapper.button>
    </Wrapper>
  );
};

Wrapper.button = SidebarButton;
Wrapper.menu = SidebarMenu;
Wrapper.title = SidebarTitle;
Wrapper.content = SidebarContent;

export default Sidebar;
