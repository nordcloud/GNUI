import * as React from "react";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";
import { BurgerWrapper, NavigationBarWrapper } from "./styles";
import { Props } from "./types";
import { useMenuBarConfiguration } from "./utils/hooks";
import { NavigationBarProvider } from "./utils/provider";

export function NavigationBar(props: Props) {
  return (
    <NavigationBarProvider popoverConfig={props.popoverConfig}>
      <NavigationBarVisual {...props} />
    </NavigationBarProvider>
  );
}

function NavigationBarVisual({
  position = "fixed",
  expandable = true,
  height = "100vh",
  backgroundColor = theme.color.background.ui01,
  closeOnLeave = false,
  expandableConfig = {
    timingFunction: "linear",
    duration: "0.2s",
  },
  children,
}: Props) {
  const { expanded, expandedDone, handleExpand, setExpanded, setExpandedDone } =
    useMenuBarConfiguration();

  if (children == null) {
    console.warn("Children is not provided. Component will not be rendered.");
    return null;
  }

  return (
    <NavigationBarWrapper
      expanded={expanded}
      onTransitionEnd={() => setExpandedDone(expanded)}
      onMouseLeave={() => {
        if (closeOnLeave) {
          setExpanded(false);
          setExpandedDone(false);
        }
      }}
      position={position}
      backgroundColor={backgroundColor}
      height={height}
      expandableConfig={expandableConfig}
    >
      {expandable ? (
        <BurgerWrapper expanded={expanded} onClick={handleExpand}>
          <SVGIcon
            name={expandedDone ? "close" : "burgerMenu"}
            css={{ padding: theme.spacing.spacing01, cursor: "pointer" }}
          />
          {expandedDone ? "Main Menu" : ""}
        </BurgerWrapper>
      ) : null}
      {children}
    </NavigationBarWrapper>
  );
}
