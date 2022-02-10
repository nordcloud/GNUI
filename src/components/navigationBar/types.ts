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

export type ExpandedProps = {
  expanded: boolean;
};

export type MenuItemProps = Item & {
  expanded: boolean;
  expandedDone: boolean;
  popoverConfig?: PopoverConfig;
};

type Item = {
  caption: string;
  icon: PathName;
  children?: React.ReactNode;
  stickToBottom?: boolean;
};

type ExpandableConfig = {
  timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  duration?: string;
};

type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
};
