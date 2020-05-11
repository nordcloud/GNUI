import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Heading } from "../heading";
import { Text } from "../text";
import { Box } from "../box";

interface TabProps {
  labelText: string;
  heading?: string;
  caption?:string;
  activeTab: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  props?: any;
}

interface TabsProps {
  name?: string;
  caption?: string;
  children: Array<TabProps>;
}

const TabsContent = styled(Box)`
  background-color: ${theme.colors.snowwhite};
  border-top:${theme.borders.grey};
  border-top-left-radius:0;
  border-top-right-radius:0;
  box-shadow:none;
  p {
    line-height: 1.5rem;
    &:first-child {
      margin-top:0;
    }
    &:last-child {
      margin-bottom:0;
    }
  }
`;

const TabContainer = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding:${theme.spacing.spacing04};
  background-color:${theme.colors.white};
  cursor: pointer;
  border-bottom:${theme.borders.grey};
  border-right:${theme.borders.grey};
  &:last-child {
    border-right:none;
    &.tab-active {
      border-right:${theme.borders.grey};
    }
  }
  &:hover {
    background-color:${theme.colors.lights[1]};
  }
  h5 {
    margin:0;
    font-weight:${theme.fontWeights.medium};
    color: ${theme.colors.darks[2]};
  }
  p {
    margin:${theme.spacing.spacing01} 0 0;
  }
  &.tab-active {
    background-color:${theme.colors.snowwhite};
    border-bottom:1px solid transparent;
  }
`;

const TabsList = styled.ol`
  padding:0;
  margin:0;
`;

const TabsWrapper = styled(Box)`
  padding:0;
`;

export const Tab: FunctionComponent<TabProps> = ({ 
  labelText,
  heading,
  caption,
  activeTab,
  onClick
}) => {
  const className = (activeTab === labelText) ? "tab-active" : "tab";
  return (
    <TabContainer className={className} onClick={onClick} key={labelText}>
      <Heading level={5}>{heading}</Heading>
      <Text small>{caption}</Text>
    </TabContainer>
)};

export const Tabs: FunctionComponent<TabsProps> = ({ 
  name,
  children
}) => {
  const [isActive, setActive] = useState(children[0].props.labelText);
  return (
    <TabsWrapper>
      <TabsList className={name}>
        {children.map((child, key) => {
          return (
            <Tab
              activeTab={isActive}
              key={key}
              heading={child.props.heading}
              labelText={child.props.labelText}
              caption={child.props.caption}
              onClick={() => setActive(child.props.labelText)}
            />
          );
        })}
      </TabsList>
      <TabsContent>
        {children.map((child) => {
          if (child.props.labelText !== isActive) return undefined;
          return child.props.children;
        })}
      </TabsContent>
    </TabsWrapper>
)};
