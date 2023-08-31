import * as React from "react";
import { css, styled } from "styled-components";
import theme from "../../theme";
import { flattenChildren } from "../../utils/flattenChildren";
import { Box } from "../box";
import { Button } from "../button";
import { Text } from "../text";

/* stylelint-disable no-descending-specificity */
export const TabsContent = styled(Box)`
  background-color: ${theme.color.background.ui01};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: none;
  padding: ${theme.spacing.spacing06} ${theme.spacing.spacing04};

  p {
    line-height: 1.5rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TabContainer = styled.div<{
  disabled?: boolean;
  wizard?: boolean;
  width?: string;
}>`
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui03};
  border-right: 1px solid ${theme.color.border.border01};
  border-bottom: 1px solid transparent;
  width: ${({ width }) => width ?? "17rem"};

  &:last-child {
    border-right-color: transparent;
    &.tab-active {
      border-right: 1px solid ${theme.color.border.border01};
    }
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `auto` : `pointer`)};
    background-color: ${({ disabled }) =>
      disabled
        ? `${theme.color.background.ui03}`
        : `${theme.color.background.ui01}`};
  }

  ${({ wizard }) =>
    wizard &&
    css`
      width: auto;
      flex: 1;
      &:last-child {
        border-right: none;
        &.tab-active {
          border-right: none;
        }
      }
    `}

  &:first-child {
    border-top-left-radius: ${theme.radiusDefault};
  }

  &.tab-active {
    background-color: ${theme.color.background.ui01};
    border-bottom: 1px solid ${theme.color.background.ui01};
    z-index: ${theme.zindex.default};
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0;
      top: -4px;
      background-color: ${theme.color.interactive.primary};
    }
  }

  &.tab,
  &.tab-active {
    &:first-child {
      & > div {
        background-color: ${theme.color.background.ui05};
        color: ${theme.color.text.text04};
      }
    }
  }
`;

const TabsList = styled.div`
  background-color: ${theme.color.background.ui03};
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
  overflow-x: auto;
  border-top-left-radius: ${theme.radiusDefault};
  border-top-right-radius: ${theme.radiusDefault};
  padding-top: 4px;

  &::before {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${theme.color.border.input};
  }

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid ${theme.color.border.border01};
    z-index: ${theme.zindex.zero};
  }
`;

const TabsWrapper = styled(Box)`
  padding: 0;
`;

const Step = styled(Box)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  box-shadow: none;
  margin-bottom: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui04};
  color: ${theme.color.text.text02};

  &.dark {
    background-color: ${theme.color.background.ui05};
    color: ${theme.color.text.text04};
  }
`;

type StyledTabsStatusButtonsProps = {
  buttonsJustify?: string;
};

const TabsStatusButtons = styled.div<StyledTabsStatusButtonsProps>`
  padding: ${theme.spacing.spacing04};
  border-top: 1px solid ${theme.color.border.border01};
  display: flex;
  justify-content: ${({ buttonsJustify }) =>
    buttonsJustify ? buttonsJustify : "space-between"};
  position: relative;
`;

const TabsCover = styled.div`
  background-color: ${theme.color.background.ui01};
  border-bottom-left-radius: ${theme.radiusDefault};
  border-bottom-right-radius: ${theme.radiusDefault};
`;

const PreviousButton = styled(Button)`
  position: absolute;
  border: none;
`;

const NextButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;

type ButtonPreviousProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export function ButtonPrevious({ onClick, children }: ButtonPreviousProps) {
  return <PreviousButton onClick={onClick}>{children}</PreviousButton>;
}

type ButtonNextProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export function ButtonNext({ onClick, children }: ButtonNextProps) {
  return <NextButton onClick={onClick}>{children}</NextButton>;
}

type TabProps = Partial<{
  className: string;
  wizard: boolean;
  step: number;
  heading: string;
  caption: string;
  activeTab: number;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  styleActive: boolean;
  index: number;
  disabled: boolean;
  width: string;
  buttons: React.ReactNode;
  buttonsJustify: string;
  label: React.ReactNode;
}>;

export function Tab({
  wizard,
  step,
  heading,
  caption,
  activeTab = -1,
  index = 0,
  width,
  disabled,
  onClick,
  label = (
    <>
      <Text weight="medium" mb={theme.spacing.spacing01}>
        {heading}
      </Text>
      <Text size="sm" mb={0} color={theme.color.text.text02}>
        {caption}
      </Text>
    </>
  ),
}: TabProps) {
  const className = activeTab === index ? "tab-active" : "tab";
  const isActive = activeTab && index;
  const ariaSelected = activeTab === index ? "true" : "false";

  return (
    <TabContainer
      key={index}
      className={className}
      role="tab"
      aria-selected={ariaSelected}
      aria-controls={`tabpanel-${index + 1}`}
      width={width}
      disabled={disabled}
      wizard={wizard}
      onClick={onClick}
    >
      {wizard ? (
        <Step {...(isActive && index <= activeTab && { className: "dark" })}>
          {step}
        </Step>
      ) : null}
      {label}
    </TabContainer>
  );
}

type TabsChild = React.ReactElement<TabProps> | boolean | null | undefined;

type TabsProps = {
  wizard?: boolean;
  name?: string;
  caption?: string;
  width?: string;
  children: (TabsChild | TabsChild[])[] | TabsChild;
  handleTab: (key: number) => void;
  step: number;
};

export function Tabs({ name, wizard, children, handleTab, step }: TabsProps) {
  const items = React.Children.toArray(
    flattenChildren(children)
  ) as React.ReactElement<TabProps>[];

  return (
    <TabsWrapper>
      <TabsList className={name}>
        {items.map((child, key) => {
          const { heading, caption, disabled, buttonsJustify, width, label } =
            child.props;
          return (
            <Tab
              key={key}
              wizard={wizard}
              width={width}
              step={key + 1}
              activeTab={step}
              index={key}
              heading={heading}
              caption={caption}
              disabled={disabled}
              buttonsJustify={buttonsJustify}
              label={label}
              onClick={disabled ? undefined : () => handleTab(key)}
            />
          );
        })}
      </TabsList>
      <TabsCover>
        {items.map((child, key) => {
          if (key !== step) {
            return undefined;
          }

          const {
            children: innerChildren,
            buttonsJustify,
            buttons,
          } = child.props;
          return (
            <React.Fragment key={key}>
              <TabsContent>{innerChildren}</TabsContent>
              {buttons != null && (
                <TabsStatusButtons buttonsJustify={buttonsJustify}>
                  {buttons}
                </TabsStatusButtons>
              )}
            </React.Fragment>
          );
        })}
      </TabsCover>
    </TabsWrapper>
  );
}

export function StyledTab({ onClick, children }: ButtonNextProps) {
  return <NextButton onClick={onClick}>{children}</NextButton>;
}
