import * as React from "react";
import { Button } from "../button";
import {
  Background,
  ModalAction,
  ModalActions,
  ModalBox,
  ModalContent,
  ModalHeader,
  ModalHeading,
  StyledModal,
} from "./styles";
import { ModalBoxProps, ModalContentProps, ModalProps } from "./types";

type Props = ModalBoxProps & ModalContentProps & ModalProps;

export function Modal({
  children,
  contentLabel,
  actions,
  modalMinWidth,
  contentMaxHeight,
  alignText,
  onClose,
  ...props
}: Props) {
  return (
    <>
      <Background zIndex="modal" onClick={onClose} {...props} />
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
                title="Close"
                onClick={onClose}
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
                  .map((action, index) => (
                    <ModalAction
                      key={`modal-action-${index}`}
                      title={action.label}
                      severity={action.severity}
                      disabled={action.disabled}
                      onClick={action.onAction}
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
}
