import * as React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import theme from "../../theme";

export type BreadcrumbsList = {
  label: string;
  uri: string;
  isDisabled?: boolean;
};

export type BreadcrumbsListProps = {
  list: BreadcrumbsList[];
  /**
   * @deprecated Might cause problems with React 18, use `renderCustom` instead
   */
  Component?: React.FC<
    React.PropsWithChildren<{ to: string; isDisabled?: boolean }>
  >;
  renderCustom?: (
    props: React.PropsWithChildren<{
      css: FlattenSimpleInterpolation;
      breadcrumb: BreadcrumbsList;
    }>
  ) => React.ReactNode;
};

export function Breadcrumbs({ list, renderCustom }: BreadcrumbsListProps) {
  return (
    <StyledBreadcrumbs>
      <ul>
        {list.map((breadcrumb) => (
          <li key={breadcrumb.label}>
            {renderCustom ? (
              renderCustom({
                css: aStyles,
                breadcrumb,
              })
            ) : (
              <StyledLink
                isDisabled={breadcrumb.isDisabled}
                href={breadcrumb.uri}
              >
                {breadcrumb.label}
              </StyledLink>
            )}
          </li>
        ))}
      </ul>
    </StyledBreadcrumbs>
  );
}

const aStyles = css`
  line-height: 1.125rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  text-decoration: none;
  transition: ${theme.transition};
  color: ${theme.color.interactive.link};
  &:hover,
  &:focus,
  &:active {
    opacity: ${theme.opacity};
  }
  &:hover {
    text-decoration: underline;
  }
`;

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
        ${aStyles}
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

const disabledLinkStyles = css`
  pointer-events: none;
  color: ${theme.color.text.text02};
`;

const StyledLink = styled.a<{ isDisabled?: boolean }>`
  && {
    ${aStyles}
    ${(props) => (props.isDisabled ? disabledLinkStyles : {})}
  }
`;
