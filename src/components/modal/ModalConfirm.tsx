import React from "react";
import {
  StyledModal,
  ModalBox,
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalActions,
  Background,
} from "./Modal";
import styled from "styled-components";
import { Heading } from "../heading";
import { Button } from "../button";
const ModalHeading = styled(Heading)`
  margin: 0;
`;

interface IModal {
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
}

export const ModalConfirm = ({
  children,
  contentLabel,
  actionLabel,
  onClose,
  ...props
}: IModal) => {
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
                size="sm"
                icon="close"
                onClick={onClose}
                title="Close"
              />
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
            <ModalActions>
              <ModalAction onClick={onClose} severity="medium">
                Cancel
              </ModalAction>
              <ModalAction onClick={props.confirm}>{actionLabel}</ModalAction>
            </ModalActions>
          </ModalBox>
        )}
      </StyledModal>
    </>
  );
};
