import * as React from "react";
import styled from "styled-components";
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
} from "./Modal";

const ModalHeading = styled(Heading)`
  margin: 0;
`;

type ModalProps = {
  isOpen: boolean;
  onClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  confirm?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  contentLabel: string;
  actionLabel: string;
  children: React.ReactNode;
  customStyles?: { [key: string]: string };
  alignText?: "left" | "right" | "center";
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
      <Background onClick={onClose} {...props}></Background>
      <StyledModal {...props}>
        {props.isOpen && (
          <ModalBox innerSpacing="spacing04" shadow="shadow04">
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
            <ModalContent alignText={alignText}>{children}</ModalContent>
            <ModalActions>
              <ModalAction onClick={onClose} severity="medium" type="button">
                Cancel
              </ModalAction>
              <ModalAction onClick={confirm} type="button">
                {actionLabel}
              </ModalAction>
            </ModalActions>
          </ModalBox>
        )}
      </StyledModal>
    </>
  );
}
