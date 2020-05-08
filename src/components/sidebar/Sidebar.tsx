import React, { FunctionComponent, forwardRef } from "react";
import styled, { css } from "styled-components";
import theme, { bp } from "../../theme";
import { variant } from "styled-system";
import { Text } from "../text";
import { Button, ButtonProps } from "../button";
import { Icon } from "../icon";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

interface SidebarProps {
  children?: React.ReactNode;
  title?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
}

interface SidebarButtonProps extends ButtonProps {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "none";
}

const overlayStyles = {
  overlay: {
    position: "fixed",
    zIndex: theme.zindex.default,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    willChange: "background-color",
    transition: "background-color 0.3s ease-in-out",
  },
};

const SidebarTitle = styled(Text)`
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeights[2]};
  padding: ${theme.spacing.spacing06};
  border-bottom: ${theme.borders.grey};
  margin: 0 auto;
`;

const SidebarContent = styled(Text)`
  font-weight: ${theme.fontWeights[0]};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.medium};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
`;

const Menu = styled(ReactModal)<SidebarProps>`
  top: 0;
  right: 0;
  outline: 0;
  ${bp("xs")`width: 100vw`};
  ${bp("sm")`width: 50vw`};
  ${bp("md")`width: 45vw`};
  ${bp("lg")`width: 40vw`};
  height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: ${theme.zindex.topoftheworld};
  border-left: ${theme.borders.disabled};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.shadow04};
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen, side }): any => {
    isOpen &&
      css`
        transform: ${side === "onLeft" ? "translateX(50%)" : "translateX(0)"};
        transition: transform, width 0.3s ease-in-out;
      `;
  }}
`;

const SidebarMenu: any = styled(Menu)(
  variant({
    prop: "side",
    variants: {
      onRight: {
        right: 0,
      },
      onLeft: {
        left: 0,
        right: "unset",
        textAlign: "right",
      },
    },
  })
);

const SidebarCloseButton: any = styled(Button)<SidebarButtonProps>`
  padding: 0;
  position: fixed;
  z-index: ${theme.zindex.topoftheworld};
  transition: all 0.3s ease-in-out;
  ${variant({
    prop: "position",
    variants: {
      topLeft: {
        top: "1rem",
        left: "1rem",
      },
      topRight: {
        top: "1rem",
        right: "1rem",
      },
      bottomLeft: {
        bottom: "1rem",
        left: "1rem",
      },
      bottomRight: {
        bottom: "1rem",
        right: "1rem",
      },
      none: {
        display: "none",
      },
    },
  })}
`;

export const CloseButton = forwardRef(({ children, ...props }, ref) => (
  <SidebarCloseButton severity="low" ref={ref} {...props}>
    {children ? (
      children
    ) : (
      <Icon width="1.2rem" height="1.2rem" image="CLOSE_SIDEBAR" />
    )}
  </SidebarCloseButton>
));

export const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
  isOpen,
  title,
  side,
  ...props
}) => {
  return (
    <SidebarMenu
      isOpen={isOpen}
      side={side}
      style={overlayStyles}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      closeTimeoutMS={300}
      contentLabel="modal"
      shouldFocusAfterRender={false}
      {...props}
    >
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarContent>{children}</SidebarContent>
    </SidebarMenu>
  );
};
