import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Text } from "../text";
import {
  ButtonNextProps,
  ButtonPreviousProps,
  TabProps,
  TabsContent,
  TabsProps,
  Step,
  TabsWrapper,
  TabsList,
  NextButton,
  PreviousButton,
  TabsCover,
  TabsStatusButtons,
} from "../tabs";

export const TabV2Container: any = styled.div<TabProps>`
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui03};
  border-right: 1px solid ${theme.color.border.border01};
  border-bottom: 1px solid transparent;
  width: 17rem;
  &:last-child {
    border-right: none;
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
  }
  &.tab,
  &.tab-active {
    &:first-child {
      & > div:first-child {
        background-color: ${({ wizard }) =>
          wizard ? theme.color.background.ui05 : ""};
        color: ${theme.color.text.text04};
      }
    }
  }
`;

export const ButtonV2Previous: FunctionComponent<ButtonPreviousProps> = ({
  onClick,
  children,
}) => {
  return <PreviousButton onClick={onClick}>{children}</PreviousButton>;
};

export const ButtonV2Next: FunctionComponent<ButtonNextProps> = ({
  onClick,
  children,
}) => {
  return <NextButton onClick={onClick}>{children}</NextButton>;
};

export const TabV2: FunctionComponent<TabProps> = ({
  wizard,
  step,
  heading,
  caption,
  activeTab,
  index,
  disabled,
  onClick,
  buttons,
  buttonsJustify,
}) => {
  const className = activeTab === index ? "tab-active" : "tab";
  /* eslint-disable */
  return (
    <TabV2Container
      className={className}
      onClick={onClick}
      key={index}
      disabled={disabled}
      wizard={wizard}
      buttons={buttons}
      buttonsJustify={buttonsJustify}
    >
      {wizard ? (
        activeTab && index ? (
          <Step {...(index <= activeTab && { className: "dark" })}>{step}</Step>
        ) : (
          <Step>{step}</Step>
        )
      ) : null}

      <React.Fragment>{heading}</React.Fragment>

      <Text size="sm" mb={0} color={theme.color.text.text02}>
        {caption}
      </Text>
    </TabV2Container>
  );
};

export const TabsV2: FunctionComponent<TabsProps> = ({
                                                       name,
                                                       wizard,
                                                       children,
                                                       handleTab,
                                                       step,
                                                     }) => {
  const items = React.Children.toArray(children) as TabProps[];
  /* eslint-disable */
  return (
    <TabsWrapper>
      <TabsList className={name}>
        {items.map((child, key) => {
          const { heading, caption, disabled, buttonsJustify } = child.props;
          return (
            <TabV2
              key={key}
              wizard={wizard}
              step={key + 1}
              activeTab={step}
              index={key}
              heading={heading}
              caption={caption}
              disabled={disabled}
              buttonsJustify={buttonsJustify}
              onClick={disabled ? undefined : () => handleTab(key)}
            />
          );
        })}
      </TabsList>
      <TabsCover>
        {items.map((child, key) => {
          if (key !== step) return undefined;
          const { children, buttonsJustify, buttons } = child.props;
          return (
            <React.Fragment key={key}>
              <TabsContent>{children}</TabsContent>
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
};

export const StyledTabV2: FunctionComponent<ButtonNextProps> = ({
                                                                  onClick,
                                                                  children,
                                                                }) => {
  return <NextButton onClick={onClick}>{children}</NextButton>;
};
