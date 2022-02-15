import * as React from "react";
import { NavigationBarContext } from "./context";

export function useMenuBarConfiguration() {
  const context = React.useContext(NavigationBarContext);

  if (context === undefined) {
    throw new Error(
      "useMenuBarConfiguration must be used within a NavigationBarContextProvider"
    );
  }
  return context;
}
