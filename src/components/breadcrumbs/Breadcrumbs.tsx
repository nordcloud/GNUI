import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";

export type BreadcrumbsList = {
  label: string;
  uri: string;
  isDisabled?: boolean;
};

export type BreadcrumbsListProps = {
  list: BreadcrumbsList[];
  Component?: React.FC<{ to: string }>;
};

const StyledBreadcrumbs = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    line-height: 1.125rem;
    li {
      display: inline-block;
      margin-right: ${theme.spacing.spacing02};
      line-height: 1.125rem;
      text-transform: ${theme.typography.titleCase};

      &:after {
        content: "/";
        font-size: ${theme.fontSizes.sm};
        margin-left: ${theme.spacing.spacing02};
        color: ${theme.color.text.text02};
      }

      &:last-child {
        margin-right: 0;
        &:after {
          display: none;
        }
        a {
          color: ${theme.color.text.text03};
          pointer-events: none;
        }
      }
    }
  }
`;

const StyledLink = styled.a<{ isDisabled?: boolean }>`
  line-height: 1.125rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  text-decoration: none;
  transition: ${theme.transition};
  color: ${(props) =>
    props.isDisabled ? theme.color.text.text02 : theme.color.interactive.link};
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
  &:hover,
  &:focus,
  &:active {
    opacity: ${(props) => (props.isDisabled ? 1 : theme.opacity)};
  }
  &:hover {
    cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
    color: ${(props) =>
      props.isDisabled
        ? theme.color.text.text02
        : theme.color.interactive.link};
    text-decoration: ${(props) => (props.isDisabled ? "none" : "underline")};
  }
`;

export function Breadcrumbs({ list, Component }: BreadcrumbsListProps) {
  return (
    <StyledBreadcrumbs>
      <ul>
        {list.map((br) => (
          <li key={br.label}>
            {Component ? (
              <Component to={br.uri || ""}>{br.label}</Component>
            ) : (
              <StyledLink isDisabled={br.isDisabled} href={br.uri || ""}>
                {br.label}
              </StyledLink>
            )}
          </li>
        ))}
      </ul>
    </StyledBreadcrumbs>
  );
}
