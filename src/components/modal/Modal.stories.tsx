import { Meta, StoryObj } from "@storybook/react";
import { useDisclosure } from "../../hooks";
import { Button } from "../button";
import { Modal } from "./Modal";
import { ModalConfirm } from "./ModalConfirm";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

export const BasicModal: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal
          isOpen={isOpen}
          contentLabel="Modal title"
          appId="#root"
          alignText="center"
          onClose={close}
        >
          This is modal content
          <br />
          Another line of content
        </Modal>
      </>
    );
  },

  name: "basic modal",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const ModalWithActions: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal
          isOpen={isOpen}
          contentLabel="Modal title"
          appId="#root"
          actions={[
            {
              order: 0,
              onAction: close,
              label: "Second action",
              severity: "low",
            },
            {
              order: 1,
              onAction: close,
              label: "Primary action",
              severity: "high",
            },
          ]}
          onClose={close}
        >
          This is modal content
          <br />
          Another line of content
        </Modal>
      </>
    );
  },

  name: "modal with actions",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const ConfirmModal: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    const action = () => alert("Deleted");

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <ModalConfirm
          contentLabel="Account"
          isOpen={isOpen}
          confirm={action}
          actionLabel="Delete"
          onClose={close}
        >
          Do you really want to delete account?
        </ModalConfirm>
      </>
    );
  },

  name: "confirm modal",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};

export const ConfirmModalLongBodyText: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    const action = () => alert("Confirmed");

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <ModalConfirm
          contentLabel="Account"
          isOpen={isOpen}
          confirm={action}
          actionLabel="Confirm"
          onClose={close}
        >
          Do you really want to delete account{" "}
          <em>
            1033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e141033195400904dd389a6788ef9de5e14
          </em>
          ?
        </ModalConfirm>
      </>
    );
  },

  name: "confirm modal long body text",
  parameters: {
    docs: {
      story: {
        height: "300px",
      },
    },
  },
};
