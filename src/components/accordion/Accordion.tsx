import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon, IconProps } from "../icon";

interface AccordionProps {
    children: any;
}

interface AccordionHeaderProps {
    title: string;
    description?: string;
    children: any;
}

interface AccordionItemProps {
    children: string | number | any;
}

interface HeaderIconProps extends IconProps {
    animate?: boolean;
}

interface StyledHeaderProps {
    isOpen?: boolean;
}

const StyledAccordionItem = styled.div`
  padding: ${theme.spacing.spacing03};
`;

const StyledHeader = styled.div<StyledHeaderProps>`
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.lights[1]};
    border-bottom: 1px solid ${theme.colors.lights[0]};
    padding: ${theme.spacing.spacing03};
    ${({ isOpen }) =>
    isOpen &&
    css`
        background-color: ${theme.colors.lights[2]};
    `}
`;

const HeaderTitle = styled.span`
  font-weight: 500;
  margin-left: ${theme.spacing.spacing03};
`;

const HeaderDescription = styled.div`
  color: ${theme.colors.darks[1]};
  font-size: 0.75rem;
  margin-left: auto;
`;

export const HeaderIcon = styled(Icon)<HeaderIconProps>`
    margin: ${theme.spacing.spacing01};
    display: inline-block;  
    transition: ${theme.transition};
    transform: rotate(-90deg);
    ${({ animate }) =>
    animate &&
    css`
        transform: rotate(0deg);
        transition: ${theme.transition};
    `}
`;

export const AccordionItem: FunctionComponent<AccordionItemProps> = ({
    children,
    ...props
    }) => {
        return (
            <StyledAccordionItem {...props}>
                {children}
            </StyledAccordionItem>
        );
}

export const AccordionHeader: FunctionComponent<AccordionHeaderProps> = ({
    title,
    description,
    children
    }) => {
        const [isOpen, toggleIsOpen] = useState(false);
        return (
            <>
                <StyledHeader onClick={() => children && toggleIsOpen(!isOpen)} isOpen={isOpen}>
                    {children && <HeaderIcon
                        width="1rem"
                        height="1rem"
                        image="ARROW_BOTTOM"
                        animate={isOpen}
                        />}
                    <HeaderTitle>
                        {title}
                    </HeaderTitle>

                    <HeaderDescription>
                        {description}
                    </HeaderDescription>
                </StyledHeader>
                {isOpen && children}
            </>
        )
    }

export const Accordion: FunctionComponent<AccordionProps> = ({
    children
  }) => {
    return (
        <div>
            {children}
        </div>
    );
  };