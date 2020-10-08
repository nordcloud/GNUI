import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Text } from "../text";
import { Box } from "../box";
import { Button } from "../button";

interface TabProps {
  className?: string;
  wizard?: boolean;
  step?: number;
  heading?: string;
  caption?: string;
  activeTab?: number;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  props?: any;
  styleActive?: boolean;
  index?: number;
  disabled?: boolean;
  buttons?: React.ReactNode;
  buttonsJustify?: string;
}

interface TabsProps {
  wizard?: boolean;
  name?: string;
  caption?: string;
  children: Array<TabProps>;
  handleTab: (e: any) => void;
  step: number;
}

interface ButtonPreviousProps {
  onClick?: (e: any) => void;
}

interface ButtonNextProps {
  onClick?: (e: any) => void;
}

export const TabsContent = styled(Box)`
  background-color: ${theme.colors.snowWhite};
  border-top: ${theme.borders.grey};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: none;
  padding: ${theme.spacing.spacing07} ${theme.spacing.spacing04};
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

export const TabContainer: any = styled.li<TabProps>`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.colors.white};
  border-bottom: ${theme.borders.grey};
  border-right: ${theme.borders.grey};
  min-width: 15.625rem;
  &:last-child {
    border-right: none;
    &.tab-active {
      border-right: ${theme.borders.grey};
    }
  }

  &:hover {
    cursor: ${({ disabled }) => (disabled ? `auto` : `pointer`)};
    background-color: ${({ disabled }) =>
      disabled ? `${theme.colors.white}` : `${theme.colors.lights[1]}`};
  }

  h5 {
    margin: 0;
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.darks[2]};
  }
  p {
    max-width: 80%;
    margin: ${theme.spacing.spacing01} 0 0;
  }
  &:first-child {
    border-top-left-radius: ${theme.radiusDefault};
  }
  &.tab-active {
    background-color: ${theme.colors.snowWhite};
    border-bottom: 1px solid transparent;
  }

  &.tab,
  &.tab-active {
    &:first-child {
      & > div {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }
`;

const TabsList = styled.ol`
  padding: 0;
  margin: 0;
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
  background-color: ${theme.colors.lights[2]};
  color: ${theme.colors.darks[3]};

  &.dark {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

interface IStyledTabsStatusButtons {
  buttonsJustify?: string;
}

const TabsStatusButtons = styled.div<IStyledTabsStatusButtons>`
  padding: ${theme.spacing.spacing04};
  border-top: ${theme.borders.grey};
  display: flex;
  justify-content: ${({ buttonsJustify }) =>
    buttonsJustify ? buttonsJustify : "space-between"};
  position: relative;
`;

const TabsCover = styled.div`
  background-color: ${theme.colors.snowWhite};
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

export const ButtonPrevious: FunctionComponent<ButtonPreviousProps> = ({
  onClick,
  children,
}) => {
  return <PreviousButton onClick={onClick}>{children}</PreviousButton>;
};

export const ButtonNext: FunctionComponent<ButtonNextProps> = ({
  onClick,
  children,
}) => {
  return <NextButton onClick={onClick}>{children}</NextButton>;
};

export const Tab: FunctionComponent<TabProps> = ({
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
  return (
    <TabContainer
      className={className}
      onClick={onClick}
      key={index}
      disabled={disabled}
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
      <Text weight="medium">{heading}</Text>
      <Text size="sm">{caption}</Text>
    </TabContainer>
  );
};

export const Tabs: FunctionComponent<TabsProps> = ({
  name,
  wizard,
  children,
  handleTab,
  step,
}) => {
  const items = React.Children.toArray(children) as TabProps[];
  return (
    <TabsWrapper>
      <TabsList className={name}>
        {items.map((child, key) => {
          const { heading, caption, disabled, buttonsJustify } = child.props;
          return (
            <Tab
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
            <>
              <TabsContent>{children}</TabsContent>
              {wizard && (
                <TabsStatusButtons buttonsJustify={buttonsJustify}>
                  {buttons}
                </TabsStatusButtons>
              )}
            </>
          );
        })}
      </TabsCover>
    </TabsWrapper>
  );
};

export const StyledTab: FunctionComponent<ButtonNextProps> = ({
  onClick,
  children,
}) => {
  return <NextButton onClick={onClick}>{children}</NextButton>;
};
