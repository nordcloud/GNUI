import styled, { keyframes } from "styled-components";
import theme from "../../theme";
import { Box } from "../box";
import { Button } from "../button";
import { Heading } from "../heading";
import { ModalBoxProps, ModalContentProps, StyledModalProps } from "./types";

export const StyledModal = styled.div<StyledModalProps>`
  top: 50%;
  left: 50%;
  position: fixed;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  overflow: visible;
  z-index: ${theme.zindex.topoftheworld};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

const showTranslateY = keyframes`
  from {
    transform: translate3d(0,1.4rem,0);
    opacity: 0;
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

export const ModalBox = styled(Box)<ModalBoxProps>`
  min-width: ${({ modalMinWidth }) => modalMinWidth || "32rem"};
  overflow: hidden;
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
  opacity: 0;
  animation: ${showTranslateY} 0.2s ease-in-out forwards;
`;

export const ModalCloseButton = styled(Button)`
  padding: ${theme.spacing.spacing01};
`;

export const ModalAction = styled(Button)`
  margin-left: ${theme.spacing.spacing04};

  &:first-child {
    margin-left: auto;
  }
`;

export const ModalActions = styled.div`
  position: sticky;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  background-color: ${theme.color.background.ui01};
  width: 100%;
  display: flex;
  padding: ${theme.spacing.spacing07} 0 0 0;
`;

type BackgroundProps = {
  isVisible?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  zIndex?: keyof typeof theme.zindex;
};

export const Background = styled.div<BackgroundProps>`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: ${theme.color.background.overlay};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: ${theme.transition};
  opacity: ${({ isVisible }) => (isVisible ? 0.7 : 0)};
  z-index: ${({ zIndex = "overlay" }) => theme.zindex[zIndex]};
`;

export const ModalContent = styled.div<ModalContentProps>`
  max-height: ${({ contentMaxHeight }) => contentMaxHeight || "25rem"};
  overflow-y: auto;
  text-align: ${({ alignText }) => alignText || "left"};
`;

export const ModalHeading = styled(Heading)`
  margin: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
  margin-bottom: ${theme.spacing.spacing04};
  border-bottom: 1px solid ${theme.color.border.border01};
  text-transform: ${theme.typography.titleCase};
  margin-left: -1rem;
  margin-right: -1rem;

  ${ModalCloseButton} {
    margin-left: auto;
  }
`;
