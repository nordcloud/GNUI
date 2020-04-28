import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export interface BreadcrumbsList {
  label: string;
  uri: string;
}

export interface BreadcrumbsListProps {
  list: Array<BreadcrumbsList>;
}

const StyledBreadcrumbs = styled.nav`
  ul {
    padding:0;
    margin:0;
    li {
      line-height: 1.5em;
      display: inline-block;
      margin-right: ${theme.spacing.spacing02};
      &:after {
        content: "/";
        font-size: ${theme.fontSizes.small};
        margin-left: ${theme.spacing.spacing02};
      }
      &:last-child {
        margin-right:0;
        &:after {
          display: none;
        }
        a {
          color: ${theme.colors.darks[4]};
        }
      }
      a {
        font-size: ${theme.fontSizes.small};
        font-weight: ${theme.fontWeights.regular};
        font-family: ${theme.typography.fonts.body};
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
      {list.map(br => (
        <li>
          <a href={br.uri || ""}>{br.label}</a>
        </li>
      ))}
    </ul>
  </StyledBreadcrumbs>
);
