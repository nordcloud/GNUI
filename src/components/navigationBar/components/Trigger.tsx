import * as React from "react";
import theme from "../../../theme";
import { SVGIcon } from "../../svgicon";
import { PathName } from "../../svgicon/paths";
import { StyledPopoverTrigger } from "../styles";
import { MenuItemProps } from "../types";

type Props = {
  caption: string;
  icon: PathName;
  expanded: boolean;
};

export function Trigger({ expanded, icon, caption }: Props) {
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
