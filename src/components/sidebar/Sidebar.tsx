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
  z-index: ${theme.zindex.masked};
  position: absolute;
  border-left: ${theme.borders.disabled};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.shadow04};
  transition: width 0.3s ease-in-out;
`;

const SidebarButton = styled(Button)<any>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: ${theme.zindex.masked};
`;

const SidebarTitle = styled(Text)`
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.spacing.spacing06};
  border-bottom: ${theme.borders.grey};
  margin: 0 auto;
`;

const SidebarContent = styled(Text)`
  font-weight: ${theme.fontWeights[0]};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
`;

const Wrapper: any = styled(Container)<{ isOpen: boolean }>`
  & ${SidebarMenu} {
    width: 0;
    transition: width 0.3s ease-in-out;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: ${theme.zindex.default};
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: scroll;
      background-color: rgba(0, 0, 0, 0.6);
      transition: background-color 0.3s ease-in-out;

      & ${SidebarMenu} {
        width: 100%;
        ${bp("sm")`width: 50%`};
        ${bp("md")`width: 40%`};
        transition: width 0.3s ease-in-out;
      }

      & ${SidebarButton} {
        position: absolute;
      }
    `}
  transition: background-color 0.3s ease-in-out;
`;

interface SidebarProps {
  children?: React.ReactNode;
  title?: string;
  onChange: (e: any) => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
  title,
  onChange,
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
