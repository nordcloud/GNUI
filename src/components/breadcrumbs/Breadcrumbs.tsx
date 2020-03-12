import React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface BreadcrumbsList {
  label: string;
  uri: string;
}

interface BreadcrumbsListProps {
  list: Array<BreadcrumbsList>;
}

const StyledBreadcrumbs = styled.nav`
  li {
    display: inline-block;
    margin-right: 0.5rem;
    &:after {
      content: "/";
      font-size: 0.875rem;
      margin-left: 0.5rem;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
    a {
      font-size: 0.875rem;
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
