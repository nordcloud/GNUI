import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme, { bp } from "../../theme";
import { variant, space } from "styled-system";
import { Text } from "../text";
import { Button, ButtonProps } from "../button";
import { Icon } from "../icon";
import { Container, Row, Col } from "react-awesome-styled-grid";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

interface SidebarProps {
  children?: React.ReactNode;
  title?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  onClick?: (e: any) => void;
}

interface SidebarButtonProps extends ButtonProps {
  icon?: string;
}

const overlayStyles = {
  overlay: {
    position: "fixed",
    zIndex: theme.zindex.default,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    willChange: "background-color",
    transition: "background-color 0.3s ease-in-out",
  },
};

interface HeaderProps {
  reverse: Boolean;
}

const Header = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: ${theme.borders.grey};
  line-height: ${theme.lineHeight};
  padding: ${theme.spacing.spacing06};
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: ${(props) => (props.reverse ? "flex-end" : "space-between")};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

const Title = styled(Text)`
  font-weight: ${theme.fontWeights[2]};
  font-size: ${theme.fontSizes.medium};
  margin: 0;
  ${space}
`;

const Content = styled(Text)`
  font-weight: ${theme.fontWeights[0]};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.medium};
  padding: ${theme.spacing.spacing06} 0;
  margin: 0;
`;

const MenuStyles = styled(ReactModal)<SidebarProps>`
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
  border-left: ${(props) => props.side !== "onLeft" && theme.borders.disabled};
  border-right: ${(props) => props.side === "onLeft" && theme.borders.disabled};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.shadow04};
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s ease-in-out;
  ${({ isOpen, side }): any => {
    isOpen &&
      css`
        transform: ${side === "onLeft" ? "translateX(50%)" : "translateX(0)"};
        transition: transform 0.3s ease-in-out;
      `;
  }}
  ${({ width }) =>
    width &&
    css`
      width: ${width} !important;
    `}
`;

const SidebarMenu: any = styled(MenuStyles)(
  variant({
    prop: "side",
    variants: {
      onRight: {
        right: 0,
      },
      onLeft: {
        left: 0,
        right: "unset",
      },
    },
  })
);

const SidebarCloseButton = styled(Button)`
  padding: 0;
  z-index: ${theme.zindex.topoftheworld};
`;

export const CloseButton = ({
  onClick,
  icon,
  children,
  ...props
}: SidebarButtonProps) => (
  <SidebarCloseButton severity="low" onClick={onClick} {...props}>
    {children ? (
      children
    ) : (
      <Icon width="24px" height="24px" image={icon || "CLOSE_SIDEBAR"} />
    )}
  </SidebarCloseButton>
);

export const Sidebar: FunctionComponent<SidebarProps> = ({
  children,
  title,
  side,
  isOpen,
  onClick,
  ...props
}) => {
  return (
    <SidebarMenu
      isOpen={isOpen}
      side={side}
      style={overlayStyles}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      contentLabel="modal"
      shouldFocusAfterRender={false}
      onRequestClose={onClick}
      {...props}
    >
      <Header reverse={side === "onLeft" && true}>
        <Title tag="span" ml={side === "onLeft" ? [1, 2] : [0]}>
          {title}
        </Title>
        <CloseButton onClick={onClick} {...props} />
      </Header>
      <Container>
        <Row>
          <Col>
            <Content>{children}</Content>
          </Col>
        </Row>
      </Container>
    </SidebarMenu>
  );
};
