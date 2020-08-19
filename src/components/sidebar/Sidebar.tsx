import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme, { bp } from "../../theme";
import { space } from "styled-system";
import { Text } from "../text";
import { Button } from "../button";
import { Icon } from "../icon";
import { Container, Row, Col } from "react-awesome-styled-grid";
import {
  ISidebarProps,
  IBackgroudProps,
  ICloseLayer,
  IInnerProps,
  SidebarButtonProps,
  HeaderProps,
} from "./interfaces";

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
  justify-content: ${({ reverse }) => (reverse ? "flex-end" : "space-between")};
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

const Title = styled(Text)`
  font-weight: ${theme.fontWeights[2]};
  font-size: ${theme.fontSizes.md};
  margin: 0;
  ${space}
`;

const Content = styled(Text)`
  font-weight: ${theme.fontWeights[0]};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing06} 0;
  margin: 0;
`;

const SidebarMenu: any = styled.div<ISidebarProps>`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  will-change: transform;
  transition: ${theme.transition};
  z-index: ${theme.zindex.topoftheworld};
  transform: ${({ isOpen, reverse }) =>
    isOpen
      ? "translate3d(0,0,0)"
      : `translate3d(${reverse ? "-100%,0,0" : "100%,0,0"})`};
  display: flex;
  justify-content: ${({ side }) =>
    side !== "onLeft" ? "flex-end" : "flex-start"};
`;
const Background: any = styled.div<IBackgroudProps>`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: ${theme.colors.black};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: ${theme.transition};
  opacity: ${({ isOpen }) => (isOpen ? 0.4 : 0)};
  z-index: ${theme.zindex.topoftheworld};
`;
const CloseLayer: any = styled.div<ICloseLayer>`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Inner: any = styled.div<IInnerProps>`
  display: inline-block;
  overflow-x: hidden;
  overflow-y: scroll;
  ${bp("xs")`width: 100vw`};
  ${bp("sm")`width: 50vw`};
  ${bp("md")`width: 45vw`};
  ${bp("lg")`width: 40vw`};
  box-shadow: ${theme.shadow.shadow04};
  background-color: ${theme.colors.white};
  border-left: ${({ side }) => side !== "onLeft" && theme.borders.disabled};
  border-right: ${({ side }) => side === "onLeft" && theme.borders.disabled};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  z-index: 2;
`;

const SidebarCloseButton = styled(Button)`
  padding: 0;
  z-index: ${theme.zindex.topoftheworld};
`;

export const CloseButton = ({
  onClick,
  icon,
  children,
}: SidebarButtonProps) => (
  <SidebarCloseButton severity="low" onClick={onClick}>
    {children ? (
      children
    ) : (
      <Icon width="24px" height="24px" image={icon || "CLOSE_SIDEBAR"} />
    )}
  </SidebarCloseButton>
);

export const Sidebar: FunctionComponent<ISidebarProps> = ({
  children,
  title,
  side,
  isOpen,
  onClick,
  ...props
}) => {
  return (
    <>
      <Background onClick={onClick} isOpen={isOpen} {...props}></Background>
      <SidebarMenu
        isOpen={isOpen}
        side={side}
        reverse={side === "onLeft" && true}
      >
        <Inner isOpen={isOpen} {...props}>
          {isOpen && (
            <>
              <Header reverse={side === "onLeft" && true}>
                <Title tag="span" ml={side === "onLeft" ? [1, 2] : [0]}>
                  {title}
                </Title>
                <CloseButton onClick={onClick} />
              </Header>
              <Container>
                <Row>
                  <Col>
                    <Content>{children}</Content>
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </Inner>
        {isOpen && (
          <CloseLayer onClick={onClick} isOpen={isOpen} {...props}></CloseLayer>
        )}
      </SidebarMenu>
    </>
  );
};
