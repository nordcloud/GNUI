import * as React from "react";
import { styled } from "styled-components";
import { Button } from "../button";
import { Heading } from "../heading";
import {
  StyledModal,
  ModalBox,
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalActions,
  Background,
} from "./styles";

const ModalHeading = styled(Heading)`
  margin: 0;
`;

type ModalProps = React.ComponentPropsWithoutRef<typeof StyledModal> & {
  isOpen: boolean;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  confirm?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  contentLabel: string;
  actionLabel: string;
  children: React.ReactNode;
  customStyles?: { [key: string]: string };
  alignText?: "center" | "left" | "right";
};

export function ModalConfirm({
  children,
  contentLabel,
  actionLabel,
  alignText,
  onClose,
  confirm,
  ...props
}: ModalProps) {
  return (
    <>
      <Background zIndex="modal" isVisible={props.isOpen} onClick={onClose} />
      <StyledModal {...props}>
        {props.isOpen && (
          <ModalBox innerSpacing="spacing04" shadow="shadow04">
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
            <ModalContent alignText={alignText}>{children}</ModalContent>
            <ModalActions>
              <ModalAction severity="medium" type="button" onClick={onClose}>
                Cancel
              </ModalAction>
              <ModalAction type="button" onClick={confirm}>
                {actionLabel}
              </ModalAction>
            </ModalActions>
          </ModalBox>
        )}
      </StyledModal>
    </>
  );
}
