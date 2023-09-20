import { useDisclosure } from "../../hooks";
import { Modal, ModalConfirm } from ".";
import { Button } from "../button";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const BasicModal = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={close}
          contentLabel={"Modal title"}
          appId="#root"
          alignText="center"
        >
          This is modal content
          <br />
          Another line of content
        </Modal>
      </>
    );
  },

  name: "basic modal",
};

export const ModalWithActions = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={close}
          contentLabel={"Modal title"}
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
        >
          This is modal content
          <br />
          Another line of content
        </Modal>
      </>
    );
  },

  name: "modal with actions",
};

export const ConfirmModal = {
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
          onClose={close}
          actionLabel="Delete"
        >
          Do you really want to delete account?
        </ModalConfirm>
      </>
    );
  },

  name: "confirm modal",
};

export const ConfirmModalLongBodyText = {
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
          onClose={close}
          actionLabel="Confirm"
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
};
