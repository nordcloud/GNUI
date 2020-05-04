import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface NavLinkProps {
  name: string;
  link: string;
  id?: string;
  className?: string;
  value?: string;
  onClick?: (e: any) => void;
}

export interface NavProps {
  name?: string;
  names: Array<string>;
  links: Array<string>;
  children?: string | number | any;
}

export interface NavWrapperProps {
  secondary?: boolean;
}

const MenuLink = styled.li`
  list-style: none;
  a {
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
        a {
          display: block;
        }
      }
    `}
`;

export const NavLink: FunctionComponent<NavLinkProps> = ({
  name,
  link,
  ...props
}) => (
  <MenuLink>
    <a href={link} title={name} {...props}>
      {name}
    </a>
  </MenuLink>
);

export const Navigation: FunctionComponent<NavProps> = ({
  names,
  links,
  ...props
}) => (
  <NavWrapper {...props}>
    {names &&
      names.map((element, index) => (
        <NavLink key={index} name={element} link={links[index]} />
      ))}
  </NavWrapper>
);
