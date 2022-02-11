import * as React from "react";
import { PopoverConfig } from "../types";
import { NavigationBarContext } from "./context";

type Props = {
  children: React.ReactNode;
  popoverConfig?: PopoverConfig;
};

export function NavigationBarProvider({
  children,
  popoverConfig = {
    triggerOn: "hover",
    closeOn: "hover",
  },
}: Props) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDone, setExpandedDone] = React.useState(false);

  const handleExpand = () => {
    if (expanded) {
      setExpandedDone(false);
    }
    setExpanded((prevState) => !prevState);
  };

  const value = {
    expanded,
    expandedDone,
    handleExpand,
    popoverConfig,
    setExpanded,
    setExpandedDone,
  };

  return (
    <NavigationBarContext.Provider value={value}>
      {children}
    </NavigationBarContext.Provider>
  );
}
