import * as React from "react";
import { ExtendedPopoverAction } from "../extendedPopover";
import { PathName } from "../svgicon/paths";

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  position?: string;
  height?: string;
  expandable?: boolean;
  backgroundColor?: string;
  closeOnLeave?: boolean;
  expandableConfig?: ExpandableConfig;
  popoverConfig?: PopoverConfig;
};

export type ExpandedProps = {
  expanded: boolean;
};

export type MenuItemProps = {
  caption: string;
  icon: PathName;
  children?: React.ReactNode;
};

export type TriggerProps = {
  expanded: boolean;
  expandedDone: boolean;
  popoverConfig?: PopoverConfig;
};

export type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
};

export type ExpandableConfig = {
  timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  duration?: string;
};
