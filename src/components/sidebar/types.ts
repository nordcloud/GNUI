import { ButtonProps } from "../button";
import { SVGIconProps } from "../svgicon";

export type SidebarProps = {
  children?: React.ReactNode;
  title?: string;
  caption?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  reverse?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  footer?: React.ReactNode;
};
export type BackgroundProps = {
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type CloseLayerProps = {
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
