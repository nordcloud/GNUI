import React from "react";
import ReactModal from "react-modal";
import theme from "../../theme";
import styled from "styled-components";
import { Heading } from "../heading";
import { Icon } from "../icon";
import { Button, Box } from "..";
import { whenIE11 } from "../../utils/browserCompatibility";

const MODAL_ACTION_HEIGHT = "5.625rem";

export const StyledModal = styled(ReactModal)`
  padding: 0;
  border: none;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  background: none;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  overflow: visible;
  z-index: 999;
  position: absolute;

  &:focus {
    outline: 0;
  }
`;

export const ModalBox = styled(Box)<IModalBox>`
  min-width: ${({ modalMinWidth }) => modalMinWidth || "32rem"};
  overflow: hidden;
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeight};
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
  background-color: ${theme.colors.white};
  width: 100%;
  display: flex;
  padding: ${theme.spacing.spacing07} 0 0 0;

  ${whenIE11(`
    position: fixed;
    height: ${MODAL_ACTION_HEIGHT};
    padding: ${theme.spacing.spacing07} ${theme.spacing.spacing04} ${theme.spacing.spacing04};
  `)}
`;

export const ModalContent = styled.div<IModalContent>`
  max-height: ${({ contentMaxHeight }) => contentMaxHeight || "25rem"};
  overflow-y: auto;
  ${whenIE11(`
    padding-bottom: ${MODAL_ACTION_HEIGHT};
  `)}
`;

const ModalHeading = styled(Heading)`
  margin: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem;
  margin-bottom: ${theme.spacing.spacing04};
  border-bottom: ${theme.borders.grey};
  margin-left: -1rem;
  margin-right: -1rem;
  ${ModalCloseButton} {
    margin-left: auto;
  }
`;

interface IModalBox {
  modalMinWidth?: string;
}

interface IModalContent {
  contentMaxHeight?: string;
}

interface IModalAction {
  onAction: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  label: string;
  disabled?: boolean;
  severity: "low" | "medium" | "high";
  order: number;
}

interface IModal {
  isOpen: boolean;
  onRequestClose?: () => void;
  onAfterOpen?: () => void;
  onClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  actions: IModalAction[];
  contentLabel: string;
  children: React.ReactNode;
  appId?: string;
  customStyles?: { [key: string]: string };
}

type IModalProps = IModal & IModalBox & IModalContent;

export const Modal = ({
  children,
  appId,
  contentLabel,
  customStyles,
  actions,
  modalMinWidth,
  contentMaxHeight,
  ...props
}: IModalProps) => {
  ReactModal.setAppElement(appId || "#root");

  return (
    <StyledModal {...props}>
      <ModalBox
        modalMinWidth={modalMinWidth}
        innerSpacing="spacing04"
        shadow="shadow04"
      >
        <ModalHeader>
          <ModalHeading level={5}>{contentLabel}</ModalHeading>
          <ModalCloseButton severity="low" onClick={props.onClose}>
            <Icon width="1rem" height="1rem" image="CLOSE_SIDEBAR" />
          </ModalCloseButton>
        </ModalHeader>

        <ModalContent contentMaxHeight={contentMaxHeight}>
          {children}
        </ModalContent>

        {actions?.length > 0 && (
          <ModalActions>
            {actions
              .sort((a, b) => a.order || 0 - b.order || 0)
              .map((action, idx) => (
                <ModalAction
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
    </StyledModal>
  );
};
