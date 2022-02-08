import { ExtendedPopoverAction } from "../extendedPopover";
import { PathName } from "../svgicon/paths";

export type Props = {
  position?: string;
  height?: string;
  expandable?: boolean;
  backgroundColor?: string;
  closeOnLeave?: boolean;
  popoverConfig?: PopoverConfig;
};

export type PopoverConfig = {
  triggerOn: ExtendedPopoverAction;
  closeOn: ExtendedPopoverAction;
};

export type ExpandableProps = {
  expanded: boolean;
};

export type MenuItemProps = {
  caption: string;
  icon: PathName;
  expanded: boolean;
  children?: React.ReactNode;
  popoverConfig?: PopoverConfig;
};
