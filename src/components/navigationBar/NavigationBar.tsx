import * as React from "react";
import theme from "../../theme";
import { Flex } from "../container";
import { ExtendedPopover } from "../extendedPopover";
import { ExtendedTooltip } from "../extendedTooltip";
import { SVGIcon } from "../svgicon";
import {
  BurgerWrapper,
  ItemsWrapper,
  NavigationBarWrapper,
  StyledTriggerWrapper,
} from "./styles";
import { Trigger } from "./Trigger";
import { MenuItemProps, Props } from "./types";

export function NavigationBar({
  position = "fixed",
  expandable = true,
  height = "100vh",
  backgroundColor = theme.color.background.ui01,
  closeOnLeave = false,
  popoverConfig = {
    triggerOn: "hover",
    closeOn: "hover",
  },
  expandableConfig = {
    timingFunction: "linear",
    duration: "0.2s",
  },
  items,
}: Props) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDone, setExpandedDone] = React.useState(false);

  const handleExpand = () => {
    if (expanded) {
      setExpandedDone(false);
    }
    setExpanded((prevState) => !prevState);
  };

  if (items == null) {
    return null;
  }

  const topItems = items.filter((item) => !item.stickToBottom);
  const bottomItems = items.filter((item) => item.stickToBottom);

  const hasBottomItems = bottomItems.length > 0;

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
        <BurgerWrapper expanded={expanded}>
          <SVGIcon
            name={expandedDone ? "close" : "burgerMenu"}
            css={{ padding: theme.spacing.spacing01, cursor: "pointer" }}
            onClick={handleExpand}
          />
          {expandedDone ? "Main Menu" : ""}
        </BurgerWrapper>
      ) : null}
      <ItemsWrapper>
        {topItems.map((item, index) => (
          <MenuItem
            key={`${item.caption}-${index}`}
            {...item}
            expanded={expanded}
            expandedDone={expandedDone}
            popoverConfig={popoverConfig}
          />
        ))}
      </ItemsWrapper>
      {hasBottomItems ? (
        <ItemsWrapper stickToBottom>
          {bottomItems.map((item, index) => (
            <MenuItem
              key={`${item.caption}-${index}`}
              {...item}
              expanded={expanded}
              stickToBottom
              expandedDone={expandedDone}
              popoverConfig={popoverConfig}
            />
          ))}
        </ItemsWrapper>
      ) : null}
    </NavigationBarWrapper>
  );
}

function MenuItem({
  caption,
  icon,
  children,
  expanded,
  popoverConfig,
  expandedDone,
  stickToBottom,
}: MenuItemProps) {
  if (children != null) {
    const triggerEl = (
      <Flex justifyContent={expanded ? "start" : "center"}>
        <Trigger expanded={expandedDone} icon={icon} caption={caption} />
      </Flex>
    );

    return (
      <StyledTriggerWrapper>
        <ExtendedPopover
          trigger={triggerEl}
          position={stickToBottom ? "end" : "start"}
          triggerOn={popoverConfig?.triggerOn}
          closeOn={popoverConfig?.closeOn}
          margin={{ left: 18 }}
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
        <Flex justifyContent={expanded ? "start" : "center"}>
          <SVGIcon name={icon} css={{ padding: theme.spacing.spacing01 }} />
          {expandedDone ? caption : ""}
        </Flex>
      </ExtendedTooltip>
    </StyledTriggerWrapper>
  );
}
