import styled, { css } from "styled-components";
import { space } from "styled-system";
import theme, { bp } from "../../theme";
import { Button } from "../button";
import { Text } from "../text";
import {
  SidebarProps,
  BackgroundProps,
  CloseLayerProps,
  InnerProps,
  HeaderProps,
} from "./types";

export const Header = styled.div<HeaderProps>`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100%;
  z-index: ${theme.zindex.default};
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid ${theme.color.border.border01};
  background-color: ${theme.color.background.ui01};
  line-height: ${theme.lineHeight};
  padding: ${theme.spacing.spacing04};
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: ${({ reverse }) => (reverse ? "flex-end" : "space-between")};
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

export const Title = styled(Text)`
  font-weight: ${theme.fontWeights.medium};
  text-transform: ${theme.typography.titleCase};
  margin: 0;
  ${space}
`;

export const Caption = styled(Text)`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.color.text.text02};
  margin-bottom: 0;
`;

export const Content = styled(Text)`
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing04} 0;
  margin-bottom: 0;
`;

export const SidebarMenu = styled.div<SidebarProps>`
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

export const Background = styled.div<BackgroundProps>`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: ${theme.color.background.overlay};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: ${theme.transition};
  opacity: ${({ isOpen }) => (isOpen ? 0.7 : 0)};
  z-index: ${theme.zindex.topoftheworld};
`;

export const CloseLayer = styled.div<CloseLayerProps>`
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

export const Inner = styled.div<InnerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: ${theme.shadow.shadow04};
  background-color: ${theme.color.background.ui01};
  border-left: ${({ side }) =>
    side !== "onLeft" && `1px solid ${theme.color.border.border01}`};
  border-right: ${({ side }) =>
    side === "onLeft" && `1px slid ${theme.color.border.border01}`};
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

export const Container = styled.div`
  padding: 0 ${theme.spacing.spacing04};
  flex: 1;
`;

export const SidebarCloseButton = styled(Button)`
  padding: 0;
  z-index: ${theme.zindex.topoftheworld};
`;

export const FooterSidebar = styled.div`
  position: sticky;
  z-index: ${theme.zindex.default};
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: ${theme.color.background.ui01};
  border-top: 1px solid ${theme.color.border.border01};
  line-height: ${theme.lineHeight};
  justify-content: space-between;
`;
