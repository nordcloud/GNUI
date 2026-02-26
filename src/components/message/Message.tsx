import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SVGIcon, SVGIconProps } from "../svgicon";

export type MessageProps = React.HTMLProps<HTMLDivElement> & {
  image?: SVGIconProps["name"];
  status?: "danger" | "discovery" | "notification" | "success" | "warning";
  borderColor?: string;
  background?: string;
  color?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  expandable?: boolean;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  expandedContent?: React.ReactNode;
  expandIcon?: SVGIconProps["name"];
  collapseIcon?: SVGIconProps["name"];
  onToggle?: (expanded: boolean) => void;
};

const getBorderColor = (status?: MessageProps["status"]) => {
  if (!status) {
    return theme.color.border.border01;
  }

  switch (status) {
    case "notification":
      return theme.color.border.info;
    case "danger":
      return theme.color.border.error;
    case "discovery":
    case "success":
    case "warning":
      return theme.color.border[status];
    default: {
      // Compile-time exhaustiveness check for future status additions.
      const exhaustiveStatus: never = status;
      return exhaustiveStatus;
    }
  }
};
const getTextColor = (status?: MessageProps["status"]) => {
  if (!status) {
    return theme.color.text.text01;
  }

  switch (status) {
    case "notification":
      return theme.color.text.info;
    case "danger":
      return theme.color.text.error;
    case "discovery":
      return theme.color.text.text01;
    case "success":
    case "warning":
      return theme.color.text[status];
    default: {
      // Compile-time exhaustiveness check for future status additions.
      const exhaustiveStatus: never = status;
      return exhaustiveStatus;
    }
  }
};

type MessageWrapperProps = Pick<
  MessageProps,
  "background" | "borderColor" | "color" | "status"
> & {
  $isExpandableHeader?: boolean;
  $isExpandedWithContent?: boolean;
};

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing03};
  line-height: 150%;
  border: 1px solid;
  border-left-width: 4px;
  background: ${theme.color.background.ui03};
  border-color: ${({ status }) => getBorderColor(status)};
  color: ${({ status }) => getTextColor(status)};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
      border-left-width: 4px;
    `}
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
  ${({ $isExpandableHeader, $isExpandedWithContent }) =>
    $isExpandableHeader &&
    $isExpandedWithContent &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-width: 0;
    `}
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.spacing03};

  svg {
    fill: currentColor;
  }
`;

export const Align = styled.div`
  margin-bottom: auto;
`;

const getResolvedBorderColor = (
  status?: MessageProps["status"],
  borderColor?: string
) => {
  return borderColor ?? getBorderColor(status);
};

const ExpandableContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
`;

const ExpandableHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

const SummaryContent = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

const ToggleLeading = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.spacing03};
`;

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  line-height: 1;
  border-radius: ${theme.radius.sm};

  &:focus-visible {
    outline: 2px solid ${theme.color.border.focus};
    outline-offset: 2px;
  }

  svg {
    fill: currentColor;
  }
`;

type ToggleIconProps = {
  $expanded?: boolean;
  $rotate?: boolean;
};

const ToggleIcon = styled.div<ToggleIconProps>`
  display: flex;

  svg {
    transition: ${theme.transition};
    transform-origin: center;
  }

  ${({ $rotate, $expanded }) =>
    $rotate &&
    css`
      svg {
        transform: rotate(${$expanded ? "0deg" : "-90deg"});
      }
    `}
`;

type ExpandedContentWrapperProps = Pick<
  MessageProps,
  "background" | "borderColor" | "color" | "status"
>;

const ExpandedContentWrapper = styled.div<ExpandedContentWrapperProps>`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  border: 1px solid
    ${({ status, borderColor }) => getResolvedBorderColor(status, borderColor)};
  border-radius: 0 0 ${theme.radiusDefault} ${theme.radiusDefault};
  background: ${theme.color.background.ui03};
  color: ${({ status }) => getTextColor(status)};
  padding: ${theme.spacing.spacing03};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export function Message({
  children,
  image,
  status,
  borderColor,
  background,
  color,
  as,
  expandable = false,
  defaultExpanded = false,
  expanded,
  onExpandedChange,
  expandedContent,
  expandIcon = "down",
  collapseIcon,
  onToggle,
  ...restProps
}: MessageProps) {
  const expandedContentId = React.useId();
  const hasExpandedContent =
    expandedContent !== null && expandedContent !== undefined;
  const isControlled = typeof expanded === "boolean";
  const [isExpandedUncontrolled, setIsExpandedUncontrolled] =
    React.useState(defaultExpanded);
  const isExpanded = isControlled ? expanded : isExpandedUncontrolled;

  const handleExpandedChange = React.useCallback(
    (nextExpanded: boolean) => {
      if (!isControlled) {
        setIsExpandedUncontrolled(nextExpanded);
      }

      onExpandedChange?.(nextExpanded);
      onToggle?.(nextExpanded);
    },
    [isControlled, onExpandedChange, onToggle]
  );

  const handleToggle = React.useCallback(() => {
    handleExpandedChange(!isExpanded);
  }, [handleExpandedChange, isExpanded]);

  if (!expandable) {
    return (
      <MessageWrapper
        as={as}
        status={status}
        borderColor={borderColor}
        background={background}
        color={color}
        {...restProps}
      >
        {image && (
          <Align>
            <IconBox>
              <SVGIcon name={image} />
            </IconBox>
          </Align>
        )}
        {children}
      </MessageWrapper>
    );
  }

  const displayedToggleIcon =
    isExpanded && collapseIcon ? collapseIcon : expandIcon;
  const shouldRotateIcon = !collapseIcon;
  const isExpandedWithContent = isExpanded && hasExpandedContent;

  return (
    <ExpandableContainer as={as} {...restProps}>
      <MessageWrapper
        $isExpandableHeader
        $isExpandedWithContent={isExpandedWithContent}
        status={status}
        borderColor={borderColor}
        background={background}
        color={color}
      >
        <ExpandableContainer>
          <ExpandableHeader>
            <ToggleLeading>
              <ToggleButton
                type="button"
                aria-expanded={isExpanded}
                aria-controls={
                  hasExpandedContent ? expandedContentId : undefined
                }
                aria-label={
                  isExpanded
                    ? "Collapse message content"
                    : "Expand message content"
                }
                onClick={handleToggle}
              >
                <ToggleIcon $expanded={isExpanded} $rotate={shouldRotateIcon}>
                  <SVGIcon name={displayedToggleIcon} />
                </ToggleIcon>
              </ToggleButton>
            </ToggleLeading>
            {image && (
              <Align>
                <IconBox>
                  <SVGIcon name={image} />
                </IconBox>
              </Align>
            )}
            <SummaryContent>{children}</SummaryContent>
          </ExpandableHeader>
        </ExpandableContainer>
      </MessageWrapper>
      {hasExpandedContent && (
        <ExpandedContentWrapper
          id={expandedContentId}
          hidden={!isExpanded}
          status={status}
          borderColor={borderColor}
          background={background}
          color={color}
        >
          {expandedContent}
        </ExpandedContentWrapper>
      )}
    </ExpandableContainer>
  );
}
