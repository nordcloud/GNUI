export interface IModalBox {
  modalMinWidth?: string;
}
export interface IStyledModal {
  isOpen: boolean;
}

export interface IModalContent {
  contentMaxHeight?: string;
}

export interface IModalAction {
  onAction: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  label: string;
  disabled?: boolean;
  severity: "low" | "medium" | "high";
  order: number;
}
export interface IBackgroundProps {
  isOpen?: boolean;
  onClick?: (e: any) => void;
}
export interface IModal {
  isOpen: boolean;
  onRequestClose?: () => void;
  onAfterOpen?: () => void;
  onClose?: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  actions: IModalAction[];
  contentLabel: string;
  children: React.ReactNode;
}
