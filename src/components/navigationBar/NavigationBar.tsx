import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";

type Props = {
  position?: string;
  height?: string;
  expandable?: boolean;
  backgroundColor?: string;
  items: (JSX.Element | null)[];
};

export function NavigationBar({
  items,
  position = "fixed",
  expandable = true,
  height = "100vh",
  backgroundColor = theme.color.background.ui01,
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
      // onMouseLeave={() => {
      //   setExpanded(false);
      //   setExpandedDone(false);
      // }}
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
      <ItemWrapper>{items}</ItemWrapper>
    </NavigationBarWrapper>
  );
}

type ExpandableProps = {
  expanded: boolean;
};

const NavigationBarWrapper = styled.div<Omit<Props, "items"> & ExpandableProps>`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  margin: 0;
  flex-direction: column;
  position: ${({ position }) => position};
  top: 0;
  width: ${({ expanded }) => (expanded ? "14rem" : theme.spacing.spacing07)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  padding: ${theme.spacing.spacing05} ${theme.spacing.spacing03}
    ${theme.spacing.spacing04};
  row-gap: ${theme.spacing.spacing07};
  border-right: solid 1px ${theme.color.border.border01};
  transition: ${({ expanded }) => (expanded ? "width 0.15s linear" : "unset")};
  align-items: ${({ expanded }) => (expanded ? "start" : "center")};
  z-index: ${theme.zindex.sticky};
`;

const BurgerWrapper = styled.div<ExpandableProps>`
  display: flex;
  flex-wrap: no-wrap;
  margin: 0;
  width: 100%;
  align-items: center;
  column-gap: ${theme.spacing.spacing02};
  justify-content: ${({ expanded }) => (expanded ? "start" : "center")};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  row-gap: ${theme.spacing.spacing04};
  width: 100%;
`;
