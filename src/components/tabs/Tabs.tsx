import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Heading } from "../heading";
import { Text } from "../text";
import { Box } from "../box";
import { Button } from "../button";

interface TabProps {
  className?:string;
  wizard?: boolean;
  step?: number;
  heading?: string;
  caption?:string;
  activeTab: number;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  props?: any;
  styleActive?:boolean;
  index: number;
  disabled?: boolean;
}

interface TabsProps {
  wizard?: boolean;
  name?: string;
  caption?: string;
  previousButton?:string;
  nextButton?:string;
  submitButton?:string;
  children: Array<TabProps>;
  handleForm: () => void;
}

const buttonDefaults: TabsProps = {
  previousButton: "Previous",
  nextButton: "Next Step",
  submitButton: "Submit",
  children: [],
  handleForm: () => (console.log("Submit"))
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

const TabContainer: any = styled.li<TabProps>`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding:${theme.spacing.spacing04};
  background-color:${theme.colors.white};
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
    cursor: ${({ disabled }) =>
    disabled ? `auto` : `pointer`};
    background-color:${({ disabled }) =>
    disabled ? `${theme.colors.white}` : `${theme.colors.lights[1]}`};
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
  box-shadow:none;
  margin-bottom: ${theme.spacing.spacing04};
  background-color: ${theme.colors.lights[2]};
  color: ${theme.colors.darks[3]};

  &.dark {
    background:${theme.colors.primary};
    color:${theme.colors.white};
  }
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
  wizard,
  step,
  heading,
  caption,
  activeTab,
  index,
  disabled,
  onClick
}) => {
  const className = (activeTab === index) ? "tab-active" : "tab";
  return (
    <TabContainer className={className} onClick={onClick} key={index} disabled={disabled}>
      {wizard ? <Step {...(index <= activeTab && {className: "dark"})}>{step}</Step> : null}
      <Heading level={5}>{heading}</Heading>
      <Text small>{caption}</Text>
    </TabContainer>
)};

export const Tabs: FunctionComponent<TabsProps> = ({ 
  name,
  wizard,
  previousButton,
  nextButton,
  submitButton,
  children,
  handleForm
}) => {
  const [isCurrentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    setCurrentStep(isCurrentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(isCurrentStep - 1);
  };

  return (
    <TabsWrapper>
      <TabsList className={name}>
        {children.map((child, key) => {
          return (
            <Tab
              wizard={wizard}
              step={key + 1}
              activeTab={isCurrentStep}
              index={key}
              heading={child.props.heading}
              caption={child.props.caption}
              disabled={child.props.disabled}
              onClick={child.props.disabled ? undefined : () => setCurrentStep(key)}
            />
          );
        })}
      </TabsList>
      <TabsCover>
        {children.map((child, key, keys) => {
          if (key !== isCurrentStep) return undefined;
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
                              <PreviousButton outline onClick={() => previousStep()}>{previousButton ? previousButton : buttonDefaults.previousButton}</PreviousButton>
                              <NextButton onClick={handleForm}>{submitButton ? submitButton : buttonDefaults.submitButton}</NextButton>
                            </React.Fragment>
                          )
                        :
                        (
                          <React.Fragment>
                            {key !== 0 ? <PreviousButton outline onClick={() => previousStep()}>{previousButton ? previousButton : buttonDefaults.previousButton}</PreviousButton> : null }
                            <NextButton onClick={() => nextStep()}>{nextButton ? nextButton : buttonDefaults.nextButton} {key + 1}</NextButton>
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
