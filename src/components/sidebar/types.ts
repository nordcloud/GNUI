import { ButtonProps } from "../button";

export interface ISidebarAction {
  onAction: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  label: string;
  disabled?: boolean;
  severity: "low" | "medium" | "high";
  order: number;
}
export interface ISidebarProps {
  children?: React.ReactNode;
  title?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  reverse?: boolean;
  onClick?: (e: any) => void;
  footer?: React.ReactElement;
}
export interface IBackgroudProps {
  isOpen?: boolean;
  onClick?: (e: any) => void;
}
export interface ICloseLayer {
  isOpen?: boolean;
  onClick?: (e: any) => void;
}
export interface IInnerProps {
  width?: number | string;
  side?: "onLeft" | "onRight";
  isOpen?: boolean;
}

export interface SidebarButtonProps extends ButtonProps {
  icon?: string;
}

export interface HeaderProps {
  reverse?: boolean;
}
