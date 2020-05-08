import React, { FunctionComponent, useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../theme";
import { Heading } from "../heading";
import { Text } from "../text";
import { Box } from "../box";
import { Button } from "../button";

interface TabProps {
  wizard?: boolean;
  step?: number;
  labelText: string;
  heading?: string;
  caption?:string;
  activeTab: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  props?: any;
}

interface TabsProps {
  wizard?: boolean;
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
  padding: ${theme.spacing.spacing07} ${theme.spacing.spacing04};
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
  min-width: 250px;
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

const Step = styled(Box)`
  padding:0;
  display:flex;
  align-items:center;
  justify-content:center;
  width:2rem;
  height:2rem;
  margin-bottom: ${theme.spacing.spacing04};
`;

const TabsStatusButtons = styled.div`
  padding: ${theme.spacing.spacing04};
  border-top: ${theme.borders.grey};
  display:flex;
  position:relative;
`;

const PreviousButton = styled(Button)`
  position: absolute;
  border:none;
`;

const NextButton = styled(Button)`
  margin-left:auto;
  margin-right:auto;
`;

const TabsCover = styled.div`
  background-color: ${theme.colors.snowwhite};
  border-bottom-left-radius: ${theme.radiusDefault};
  border-bottom-right-radius: ${theme.radiusDefault};
`;

export const Tab: FunctionComponent<TabProps> = ({ 
  labelText,
  wizard,
  step,
  heading,
  caption,
  activeTab,
  onClick
}) => {
  const className = (activeTab === labelText) ? "tab-active" : "tab";
  return (
    <TabContainer className={className} onClick={onClick} key={labelText}>
      {wizard ? <Step dark>{step}</Step> : null}
      <Heading level={5}>{heading}</Heading>
      <Text small>{caption}</Text>
    </TabContainer>
)};

export const Tabs: FunctionComponent<TabsProps> = ({ 
  name,
  wizard,
  children
}) => {
  const [isActive, setActive] = useState(children[0].props.labelText);
  const [isCurrentStep, setCurrentStep] = useState(children[0].props.key);

  return (
    <TabsWrapper>
      <TabsList className={name}>
        {children.map((child, key) => {
          let count = key + 1;
          return (
            <Tab
              wizard={wizard}
              step={count}
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
      <TabsCover>
        {children.map((child, key, keys) => {
          if (child.props.labelText !== isActive) return undefined;
          else {
              return (
                <React.Fragment>
                  <TabsContent>
                    {child.props.children}
                  </TabsContent>
                  {wizard && 
                    <TabsStatusButtons>
                      {
                        (keys.length - 1 === key) 
                        ?
                          (
                            <React.Fragment>
                              <PreviousButton outline>Previous</PreviousButton>
                              <NextButton>Submit</NextButton>
                            </React.Fragment>
                          )
                        :
                        (
                          <React.Fragment>
                            {key !== 0 ? <PreviousButton outline>Previous</PreviousButton> : null }
                            <NextButton>Next Step {key + 1}</NextButton>
                          </React.Fragment>
                        )
                      }
                    </TabsStatusButtons>
                  }
                </React.Fragment>
              )
            }
          })}
      </TabsCover>
    </TabsWrapper>
)};
