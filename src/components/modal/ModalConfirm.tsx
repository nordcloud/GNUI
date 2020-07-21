import React from "react";
import { Icon } from "../icon";
import {
  StyledModal,
  ModalBox,
  ModalCloseButton,
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalActions,
} from "./Modal";
import styled from "styled-components";
import { Heading } from "../heading";

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
  ...props
}: IModal) => {
  return (
    <StyledModal {...props}>
      <ModalBox innerSpacing="spacing04" shadow="shadow04">
        <ModalHeader>
          <ModalHeading level={5}>{contentLabel}</ModalHeading>
          <ModalCloseButton severity="low" onClick={props.onClose}>
            <Icon width="1rem" height="1rem" image="CLOSE_SIDEBAR" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalActions>
          <ModalAction onClick={props.onClose} severity="medium">
            Cancel
          </ModalAction>
          <ModalAction onClick={props.confirm}>{actionLabel}</ModalAction>
        </ModalActions>
      </ModalBox>
    </StyledModal>
  );
};
