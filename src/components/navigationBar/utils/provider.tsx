import * as React from "react";
import { useDisclosure } from "../../../hooks";
import { PopoverConfig } from "../types";
import { NavigationBarContext } from "./context";

type Props = {
  children: React.ReactNode;
  popoverConfig?: PopoverConfig;
};

const popoverConfigDefault = {
  triggerOn: "hover",
  closeOn: "hover",
  position: "start",
} as const;

export function NavigationBarProvider({
  children,
  popoverConfig = popoverConfigDefault,
}: Props) {
  const { isOpen: expanded, toggle: setExpanded } = useDisclosure();
  const {
    isOpen: expandedDone,
    close: closeExpandedDone,
    toggle: setExpandedDone,
  } = useDisclosure();

  const handleExpand = () => {
    if (expanded) {
      closeExpandedDone();
    }
    setExpanded();
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
