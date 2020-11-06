import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme, { bp } from "../../theme";
import { space } from "styled-system";
import { Text } from "../text";
import { Button } from "../button";
import { Icon } from "../icon";
import {
  SidebarProps,
  BackgroudProps,
  CloseLayerProps,
  InnerProps,
  SidebarButtonProps,
  HeaderProps,
} from "./types";

const Header = styled.div<HeaderProps>`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100%;
  z-index: ${theme.zindex.default};
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: ${theme.borders.grey};
  background-color: ${theme.colors.snowWhite};
  line-height: ${theme.lineHeight};
  padding: ${theme.spacing.spacing04};
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
  margin-bottom: 0;
`;

const SidebarMenu = styled.div<SidebarProps>`
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
const Background = styled.div<BackgroudProps>`
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
const CloseLayer = styled.div<CloseLayerProps>`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: ${theme.zindex.default};
`;
const Inner = styled.div<InnerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: ${theme.shadow.shadow04};
  background-color: ${theme.colors.snowWhite};
  border-left: ${({ side }) => side !== "onLeft" && theme.borders.disabled};
  border-right: ${({ side }) => side === "onLeft" && theme.borders.disabled};
  max-width: 100%;
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          ${bp("xs")`width: 100vw`};
          ${bp("sm")`width: 50vw`};
          ${bp("md")`width: 45vw`};
          ${bp("lg")`width: 40vw`};
          ${bp("xl")`width: 30rem`};
          ${bp("xxl")`width: 30rem`};
        `}
  z-index: 2;
`;
const Container = styled.div`
  padding: 0 ${theme.spacing.spacing04};
  flex: 1;
`;
const SidebarCloseButton = styled(Button)`
  padding: 0;
  z-index: ${theme.zindex.topoftheworld};
`;

const FooterSidebar = styled.div`
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: ${theme.colors.snowWhite};
  border-top: ${theme.borders.grey};
  line-height: ${theme.lineHeight};
  justify-content: space-between;
`;

export const CloseButton = ({
  onClick,
  icon,
  children,
}: SidebarButtonProps) => (
  <SidebarCloseButton severity="low" onClick={onClick} title={"Close sidebar"}>
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
  footer: Footer,
  onClick = () => undefined,
  ...props
}) => {
  React.useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClick("");
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClick]);

  return (
    <>
      <Background onClick={onClick} isOpen={isOpen}></Background>
      <SidebarMenu
        isOpen={isOpen}
        side={side}
        reverse={side === "onLeft" && true}
      >
        <Inner isOpen={isOpen} {...props}>
          {isOpen && (
            <>
              <Header reverse={side === "onLeft" && true}>
                <Title
                  tag="span"
                  ml={side === "onLeft" ? ["1rem", "1rem"] : [0]}
                >
                  {title}
                </Title>
                <Button
                  severity="low"
                  size="md"
                  icon="close"
                  onClick={onClick}
                  title="Close sidebar"
                  type="button"
                />
              </Header>
              <Container>
                <Content tag="div">{children}</Content>
              </Container>
              {Footer && <FooterSidebar>{Footer}</FooterSidebar>}
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
