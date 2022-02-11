import * as React from "react";
import { NavigationBarContext } from "./context";

export function useExpanded() {
  const context = React.useContext(NavigationBarContext);

  if (context === undefined) {
    throw new Error(
      "useExpanded must be used within a NavigationBarContextProvider"
    );
  }
  return context;
}
