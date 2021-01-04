import React from "react";
import theme from "../../theme";
import styled, { keyframes } from "styled-components";
import { Heading } from "../heading";
import { Button, Box } from "..";
import { whenIE11 } from "../../utils/browserCompatibility";
import {
  ModalBoxProps,
  ModalContentProps,
  ModalProps,
  StyledModalProps,
  BackgroudProps,
} from "./types";
const MODAL_ACTION_HEIGHT = "5.625rem";

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
  ${whenIE11(`
    position: fixed;
    height: ${MODAL_ACTION_HEIGHT};
    padding: ${theme.spacing.spacing07} ${theme.spacing.spacing04} ${theme.spacing.spacing04};
  `)}
`;

export const Background = styled.div<BackgroudProps>`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: ${theme.color.background.ui05};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: ${theme.transition};
  opacity: ${({ isOpen }) => (isOpen ? 0.5 : 0)};
  z-index: ${theme.zindex.topoftheworld};
`;

export const ModalContent = styled.div<ModalContentProps>`
  max-height: ${({ contentMaxHeight }) => contentMaxHeight || "25rem"};
  overflow-y: auto;
  text-align: ${({ alignText }) => alignText || "left"};
  ${whenIE11(`
    padding-bottom: ${MODAL_ACTION_HEIGHT};
  `)}
`;

const ModalHeading = styled(Heading)`
  margin: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
  margin-bottom: ${theme.spacing.spacing04};
  border-bottom: 1px solid ${theme.color.border.border01};
  margin-left: -1rem;
  margin-right: -1rem;
  ${ModalCloseButton} {
    margin-left: auto;
  }
`;

type Modal = ModalProps & ModalBoxProps & ModalContentProps;

export const Modal = ({
  children,
  contentLabel,
  actions,
  modalMinWidth,
  contentMaxHeight,
  alignText,
  onClose,
  ...props
}: Modal) => {
  return (
    <>
      <Background onClick={onClose} {...props}></Background>
      <StyledModal {...props}>
        {props.isOpen && (
          <ModalBox
            modalMinWidth={modalMinWidth}
            innerSpacing="spacing04"
            shadow="shadow04"
          >
            <ModalHeader>
              <ModalHeading level={4}>{contentLabel}</ModalHeading>
              <Button
                severity="low"
                size="md"
                icon="close"
                onClick={onClose}
                title="Close"
              />
            </ModalHeader>
            <ModalContent
              alignText={alignText}
              contentMaxHeight={contentMaxHeight}
            >
              {children}
            </ModalContent>
            {actions?.length > 0 && (
              <ModalActions>
                {actions
                  .sort((a, b) => a.order || 0 - b.order || 0)
                  .map((action, idx) => (
                    <ModalAction
                      title={action.label}
                      key={`modal-action-${idx}`}
                      severity={action.severity}
                      onClick={action.onAction}
                      disabled={action.disabled}
                    >
                      {action.label}
                    </ModalAction>
                  ))}
              </ModalActions>
            )}
          </ModalBox>
        )}
      </StyledModal>
    </>
  );
};
