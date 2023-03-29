import theme from "../../theme";
import { FlexContainer } from "../container";
import { ExtendedPopover } from "../extendedPopover";
import { SVGIcon } from "../svgicon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { Trigger } from "./components/Trigger";
import { StyledTriggerWrapper } from "./styles";
import { MenuItemProps } from "./types";
import { useMenuBarConfiguration } from "./utils/hooks";

export function MenuItem({ caption, icon, children }: MenuItemProps) {
  const { expanded, expandedDone, popoverConfig } = useMenuBarConfiguration();

  if (children != null) {
    const triggerElement = (
      <FlexContainer justifyContent={expanded ? "start" : "center"}>
        <Trigger expanded={expandedDone} icon={icon} caption={caption} />
      </FlexContainer>
    );

    return (
      <StyledTriggerWrapper>
        <ExtendedPopover
          trigger={triggerElement}
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
      <Tooltip placement="right" showArrow={false} offset={20}>
        <TooltipTrigger>
          <FlexContainer justifyContent={expanded ? "start" : "center"}>
            <SVGIcon name={icon} css={{ padding: theme.spacing.spacing01 }} />
            {expandedDone ? caption : ""}
          </FlexContainer>
        </TooltipTrigger>
        <TooltipContent>{expanded ? null : caption}</TooltipContent>
      </Tooltip>
    </StyledTriggerWrapper>
  );
}
