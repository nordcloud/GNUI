import * as React from "react";
import { PopoverConfig } from "../types";

type Props = {
  expanded: boolean;
  expandedDone: boolean;
  handleExpand: () => void;
  setExpandedDone: (v: boolean) => void;
  setExpanded: (v: boolean) => void;
  popoverConfig: PopoverConfig;
};

export const NavigationBarContext = React.createContext<Props | undefined>(
  undefined
);
