import * as React from "react";
import { ExtendedPopoverAction } from "../extendedPopover";
import { PathName } from "../svgicon/paths";

export type Props = {
  children: React.ReactNode[];
  position?: string;
  height?: string;
  expandable?: boolean;
  expandableConfig?: ExpandableConfig;
  backgroundColor?: string;
  closeOnLeave?: boolean;
  pushPopoverOutside?: boolean;
  popoverConfig?: PopoverConfig;
};

export type ExpandedProps = {
  expanded: boolean;
};

export type Item = {
  caption: string;
  icon: PathName;
  children?: React.ReactNode;
};

export type MenuItemProps = Item & {
  expanded: boolean;
  expandedDone: boolean;
  popoverConfig?: PopoverConfig;
};

export type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
};

type ExpandableConfig = {
  timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  duration?: string;
};
