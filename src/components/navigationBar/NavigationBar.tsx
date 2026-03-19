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
  onExpandClick,
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

  const icon = expandedDone ? "close" : "burgerMenu";
  const caption = expandedDone ? "Main Menu" : "";

  return (
    <NavigationBarWrapper
      expanded={expanded}
      position={position}
      backgroundColor={backgroundColor}
      height={height}
      expandableConfig={expandableConfig}
      onTransitionEnd={() => setExpandedDone(expanded)}
      onMouseLeave={() => {
        if (closeOnLeave) {
          setExpanded(false);
          setExpandedDone(false);
        }
      }}
    >
      {expandable ? (
        <BurgerWrapper
          expanded={expanded}
          onClick={() => {
            handleExpand();
            onExpandClick?.();
          }}
        >
          <SVGIcon
            name={icon}
            css={{ padding: theme.spacing.spacing01, cursor: "pointer" }}
          />
          {caption}
        </BurgerWrapper>
      ) : null}
      {children}
    </NavigationBarWrapper>
  );
}
