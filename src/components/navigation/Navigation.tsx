import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface NavLinkProps {
  name: string;
  link: string;
  onClick: () => void;
  className?: string;
  value?: string;
}

export interface NavProps {
  name?: string;
  names: Array<string>;
  links: Array<string>;
  onClick: (link: string) => void;
  children?: string | number | any;
}

export interface NavWrapperProps {
  secondary?: boolean;
}

const MenuLink = styled.li`
  list-style: none;
  display: inline-block;
  line-height: ${theme.lineHeight};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.regular};
  border-radius: ${theme.radius.default};
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.lights[2]};
  }
  &:active,
  &:focus {
    background-color: ${theme.colors.lights[3]};
  }
`;

const NavWrapper = styled.ul<NavWrapperProps>`
  margin: 0;
  padding-left: 0;
  display: flex;
  li {
    margin-left: ${theme.spacing.spacing04};
    &:first-child {
      margin-left: 0;
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 100%;
      display: block;
      li {
        margin: 0 0 ${theme.spacing.spacing02};
        display: block;
      }
    `}
`;

export const NavLink: FunctionComponent<NavLinkProps> = ({
  name,
  link,
  ...props
}) => (
  <MenuLink id={link} {...props}>
    {name}
  </MenuLink>
);

export const Navigation: FunctionComponent<NavProps> = ({
  names,
  links,
  onClick,
  ...props
}) => (
  <NavWrapper {...props}>
    {names &&
      names.map((element, index) => (
        <NavLink key={index} name={element} link={links[index]} onClick={() => onClick(links[index])}/>
      ))}
  </NavWrapper>
);
