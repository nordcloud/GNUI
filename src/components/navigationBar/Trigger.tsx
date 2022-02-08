import * as React from "react";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";
import { StyledPopoverTrigger } from "./styles";
import { MenuItemProps } from "./types";

export function Trigger({
  expanded,
  icon,
  caption,
}: Pick<MenuItemProps, "expanded" | "icon" | "caption">) {
  return expanded ? (
    <StyledPopoverTrigger>
      <TriggerIcon icon={icon} />
      {caption}
      <SVGIcon name="chevronRight" size="sm" />
    </StyledPopoverTrigger>
  ) : (
    <TriggerIcon icon={icon} />
  );
}

function TriggerIcon({ icon }: Pick<MenuItemProps, "icon">) {
  return <SVGIcon name={icon} css={{ padding: theme.spacing.spacing01 }} />;
}
