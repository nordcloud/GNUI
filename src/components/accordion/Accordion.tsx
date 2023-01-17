import * as React from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import { useDisclosure } from "../../hooks";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";

type AccordionProps = {
  children: React.ReactNode;
};

type AccordionHeaderProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  small?: boolean;
};

type AccordionItemProps = {
  children: React.ReactNode;
};

type HeaderIconProps = {
  animate?: boolean;
  cursor?: string;
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
  background-color: ${theme.color.background.ui02};
  border: 1px solid ${theme.color.border.border01};
  border-radius: ${theme.radius.md};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const StyledHeader = styled.div<StyledHeaderProps>`
  font-weight: ${theme.fontWeights.medium};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.color.background.ui03};
  padding: ${theme.spacing.spacing03};
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.color.border.border01};
  &:hover {
    cursor: pointer;
    background-color: ${theme.color.background.ui04};
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
      background-color: ${theme.color.background.ui04};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

const HeaderTitle = styled.span`
  margin-left: ${theme.spacing.spacing02};
  text-transform: ${theme.typography.titleCase};
`;

const HeaderDescription = styled.div`
  color: ${theme.color.text.text02};
  font-size: ${theme.fontSizes.sm};
  margin-left: auto;
  font-weight: ${theme.fontWeights.regular};
`;

export const HeaderIcon = styled.div<HeaderIconProps>`
  display: flex;
  cursor: ${(props) => props.cursor ?? "default"};
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

export function AccordionItem({ children, ...props }: AccordionItemProps) {
  return <StyledAccordionItem {...props}>{children}</StyledAccordionItem>;
}

export function AccordionHeader({
  title,
  description,
  children,
  small,
}: AccordionHeaderProps) {
  const { isOpen, toggle } = useDisclosure();
  return (
    <>
      <StyledHeader
        isOpen={isOpen}
        small={small}
        onClick={() => children && toggle()}
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
}

export function Accordion({ children, ...props }: AccordionProps & SpaceProps) {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
}
