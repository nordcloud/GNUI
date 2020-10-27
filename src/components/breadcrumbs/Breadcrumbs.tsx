import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export type BreadcrumbsList = {
  label: string;
  uri: string;
};

export type BreadcrumbsListProps = {
  list: Array<BreadcrumbsList>;
};

const StyledBreadcrumbs = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-right: ${theme.spacing.spacing02};
      &:after {
        content: "/";
        font-size: ${theme.fontSizes.sm};
        margin-left: ${theme.spacing.spacing02};
      }
      &:last-child {
        margin-right: 0;
        &:after {
          display: none;
        }
        a {
          color: ${theme.colors.darks[4]};
        }
      }
      a {
        line-height: 1.5em;
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.regular};
        font-family: ${theme.fonts.body};
        color: ${theme.colors.primary};
        text-decoration: none;
        transition: ${theme.transition};
        &:hover,
        &:focus,
        &:active {
          opacity: ${theme.opacity};
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const Breadcrumbs = ({ list }: BreadcrumbsListProps) => (
  <StyledBreadcrumbs>
    <ul>
      {list.map((br) => (
        <li key={br.label}>
          <a href={br.uri || ""}>{br.label}</a>
        </li>
      ))}
    </ul>
  </StyledBreadcrumbs>
);
