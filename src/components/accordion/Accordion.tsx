import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components/macro";
import theme from "../../theme";
import { space, SpaceProps } from "styled-system";
import { SVGIcon } from "../svgicon";

type AccordionProps = {
  children: any;
};

type AccordionHeaderProps = {
  title: string;
  description?: string;
  children: any;
  small?: boolean;
};

type AccordionItemProps = {
  children: string | number | any;
};

type HeaderIconProps = {
  animate?: boolean;
};

type StyledHeaderProps = {
  isOpen?: boolean;
  small?: boolean;
};

const StyledAccordion = styled.div`
  ${space}
`;

const StyledAccordionItem = styled.div`
  padding: ${theme.spacing.spacing03};
  background-color: ${theme.colors.lights[0]};
  border: 1px solid ${theme.colors.lights[2]};
  border-radius: ${theme.radius.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const StyledHeader = styled.div<StyledHeaderProps>`
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.colors.lights[1]};
  padding: ${theme.spacing.spacing03};
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.colors.lights[2]};
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.lights[2]};
  }
  ${({ small }) =>
    small &&
    css`
      font-size: ${theme.fontSizes.sm};
      line-height: 1.5em;
      padding: ${theme.spacing.spacing02};
      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    `}
  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${theme.colors.lights[2]};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

const HeaderTitle = styled.span`
  margin-left: ${theme.spacing.spacing02};
`;

const HeaderDescription = styled.div`
  color: ${theme.colors.darks[1]};
  font-size: ${theme.fontSizes.sm};
  margin-left: auto;
  font-weight: ${theme.fontWeights.regular};
`;

export const HeaderIcon = styled.div<HeaderIconProps>`
  display: flex;
  svg {
    transition: ${theme.transition};
    transform-origin: center;
    transform: rotate(-90deg);
  }
  ${({ animate }) =>
    animate &&
    css`
      svg {
        transform: rotate(0);
        transform-origin: center;
        transition: ${theme.transition};
      }
    `}
`;

export const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  children,
  ...props
}) => {
  return <StyledAccordionItem {...props}>{children}</StyledAccordionItem>;
};

export const AccordionHeader: FunctionComponent<AccordionHeaderProps> = ({
  title,
  description,
  children,
  small,
}) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <>
      <StyledHeader
        onClick={() => children && toggleIsOpen(!isOpen)}
        isOpen={isOpen}
        small={small}
      >
        {children && (
          <HeaderIcon animate={isOpen}>
            <SVGIcon name="down" />
          </HeaderIcon>
        )}
        <HeaderTitle>{title}</HeaderTitle>

        <HeaderDescription>{description}</HeaderDescription>
      </StyledHeader>
      {isOpen && children}
    </>
  );
};

export const Accordion: FunctionComponent<AccordionProps & SpaceProps> = ({
  children,
  ...props
}) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};
