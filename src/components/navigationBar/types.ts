import * as React from "react";
import { ExtendedPopoverAction } from "../extendedPopover";
import { PathName } from "../svgicon/paths";

export type Props = {
  position?: string;
  height?: string;
  expandable?: boolean;
  expandableConfig?: ExpandableConfig;
  backgroundColor?: string;
  closeOnLeave?: boolean;
  pushPopoverOutside?: boolean;
  popoverConfig?: PopoverConfig;
  items?: Item[];
};

type Item = {
  caption: string;
  icon: PathName;
  children?: React.ReactNode;
  stickToBottom?: boolean;
};

export type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
};

type ExpandableConfig = {
  timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  duration?: string;
};

export type ExpandedProps = {
  expanded: boolean;
};

export type MenuItemProps = {
  caption: string;
  icon: PathName;
  expanded: boolean;
  expandedDone: boolean;
  children?: React.ReactNode;
  popoverConfig?: PopoverConfig;
  stickToBottom?: boolean;
};
