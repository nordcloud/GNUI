import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export type BreadcrumbsList = {
  label: string;
  uri: string;
};

export type BreadcrumbsListProps = {
  list: Array<BreadcrumbsList>;
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

      a {
        line-height: 1.125rem;
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.regular};
        font-family: ${theme.fonts.body};
        color: ${theme.color.interactive.link};
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

export const Breadcrumbs = ({ list, Component }: BreadcrumbsListProps) => {
  return (
    <StyledBreadcrumbs>
      <ul>
        {list.map((br) => (
          <li key={br.label}>
            {Component ? (
              <Component to={br.uri || ""}>{br.label}</Component>
            ) : (
              <a href={br.uri || ""}>{br.label}</a>
            )}
          </li>
        ))}
      </ul>
    </StyledBreadcrumbs>
  );
};
