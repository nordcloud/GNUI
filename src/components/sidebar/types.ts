import { ButtonProps } from "../button";
import { SVGIconProps } from "../svgicon";

export type SidebarProps = {
  children?: React.ReactNode;
  title?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  reverse?: boolean;
  onClick?: (e: any) => void;
  footer?: React.ReactNode;
};
export type BackgroudProps = {
  isOpen?: boolean;
  onClick?: (e: any) => void;
};
export type CloseLayerProps = {
  isOpen?: boolean;
  onClick?: (e: any) => void;
};
export type InnerProps = {
  width?: number | string;
  side?: "onLeft" | "onRight";
  isOpen?: boolean;
};

export type SidebarButtonProps = {
  icon?: SVGIconProps["name"];
} & ButtonProps;

export type HeaderProps = {
  reverse?: boolean;
};
