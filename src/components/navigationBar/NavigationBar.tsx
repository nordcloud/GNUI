import * as React from "react";
import styled from "styled-components";
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
}: Props) {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedDone, setExpandedDone] = React.useState(false);

  const handleExpand = () => {
    if (expanded) {
      setExpandedDone(false);
    }
    setExpanded((prevState) => !prevState);
  };

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
        {ITEMS.map((item, index) => (
          <MenuItem
            key={`${item.caption}-${index}`}
            expanded={expanded}
            expandedDone={expandedDone}
            popoverConfig={popoverConfig}
            {...item}
          />
        ))}
      </ItemsWrapper>
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
}: MenuItemProps & { expandedDone: boolean }) {
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
          position="start"
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

// TODO: remove
const SubmenuWrapper = styled.div`
  background-color: ${theme.color.background.ui01};
  border: solid 1px ${theme.color.background.ui04};
  border-radius: ${theme.radiusDefault};
  box-shadow: rgb(31 30 47 / 10%) 12px 0 22px;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};

  li {
    margin-bottom: ${theme.spacing.spacing01};

    > * {
      padding: ${theme.spacing.spacing01} ${theme.spacing.spacing03};
      width: 100%;
    }

    a {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
    }
  }
`;

// TODO: remove
const ITEMS: Omit<MenuItemProps, "expanded">[] = [
  {
    caption: "Dashboard",
    icon: "dashboard",
  },
  {
    caption: "Applications",
    icon: "application",
  },
  {
    caption: "Settings",
    icon: "settings",
    children: (
      <SubmenuWrapper>
        <ul>
          <li>User settings</li>
          <li>Application settings</li>
        </ul>
      </SubmenuWrapper>
    ),
  },
];
