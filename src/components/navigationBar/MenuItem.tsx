import * as React from "react";
import theme from "../../theme";
import { FlexContainer } from "../container/Container";
import { ExtendedPopover } from "../extendedPopover";
import { ExtendedTooltip } from "../extendedTooltip";
import { SVGIcon } from "../svgicon";
import { Trigger } from "./components/Trigger";
import { StyledTriggerWrapper } from "./styles";
import { MenuItemProps } from "./types";
import { useMenuBarConfiguration } from "./utils/hooks";

export function MenuItem({ caption, icon, children }: MenuItemProps) {
  const { expanded, expandedDone, popoverConfig } = useMenuBarConfiguration();

  if (children != null) {
    const triggerEl = (
      <FlexContainer justifyContent={expanded ? "start" : "center"}>
        <Trigger expanded={expandedDone} icon={icon} caption={caption} />
      </FlexContainer>
    );

    return (
      <StyledTriggerWrapper>
        <ExtendedPopover
          trigger={triggerEl}
          position="start"
          triggerOn={popoverConfig?.triggerOn}
          closeOn={popoverConfig?.closeOn}
          margin={{ left: 20 }}
          content={children}
        />
      </StyledTriggerWrapper>
    );
  }

  return (
    <StyledTriggerWrapper>
      <ExtendedTooltip
        caption={expanded ? null : caption}
        placement="right"
        margin={{ right: 20 }}
      >
        <FlexContainer justifyContent={expanded ? "start" : "center"}>
          <SVGIcon name={icon} css={{ padding: theme.spacing.spacing01 }} />
          {expandedDone ? caption : ""}
        </FlexContainer>
      </ExtendedTooltip>
    </StyledTriggerWrapper>
  );
}
