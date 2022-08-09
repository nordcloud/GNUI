import { ButtonProps } from "../button";
import { SVGIconProps } from "../svgicon";

export type PaddingProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export type SidebarProps = {
  children?: React.ReactNode;
  title?: string;
  caption?: string;
  isOpen?: boolean;
  side?: "onLeft" | "onRight";
  width?: number | string;
  reverse?: boolean;
  onClick?: () => void;
  footer?: React.ReactNode;
  padding?: PaddingProps;
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
  padding?: PaddingProps;
};

export type ContainerProps = {
  padding?: PaddingProps;
};
