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
  ul {
    padding:0;
    li {
      display: inline-block;
      margin-right: ${theme.spacing.spacing02};
      &:after {
        content: "/";
        font-size: ${theme.fontSizes.small};
        margin-left: ${theme.spacing.spacing02};
      }
      &:last-child {
        &:after {
          display: none;
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
