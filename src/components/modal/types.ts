export type ModalBoxProps = {
  modalMinWidth?: string;
};

export type StyledModalProps = {
  isOpen: boolean;
};

export type ModalContentProps = {
  contentMaxHeight?: string;
  alignText?: "center" | "left" | "right";
};

type ModalAction = {
  onAction: (event: React.KeyboardEvent | React.MouseEvent) => void;
  label: string;
  disabled?: boolean;
  severity: "high" | "low" | "medium";
  order: number;
};

export type ModalProps = {
  isOpen: boolean;
  onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  actions: ModalAction[];
  contentLabel: string;
  children: React.ReactNode;
};
