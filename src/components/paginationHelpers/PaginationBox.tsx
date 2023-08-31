import { styled } from "styled-components";
import theme from "../../theme";

type Props = {
  sidebar?: boolean;
  small?: boolean;
};

export const StyledPaginationBox = styled.nav<Props>`
  display: flex;
  flex-wrap: wrap;
  flex: ${({ sidebar }) => (sidebar ? 1 : 0)};
  background-color: ${theme.color.background.ui03};
  padding: ${theme.spacing.spacing03};
  border: ${({ sidebar }) =>
    sidebar ? "none" : `1px solid ${theme.color.border.border01}`};
  justify-content: ${({ small }) => (small ? "center" : "space-between")};
  border-radius: ${theme.radius.md};
  align-items: center;

  .pagination-result,
  .pagination-show {
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.color.text.text02};
    margin: 0 ${theme.spacing.spacing02} 0 0;
    line-height: ${theme.lineHeight};
  }

  .pagination-result {
    width: 12rem;
  }

  .pagination-per-page {
    display: flex;
    align-items: center;
  }

  .pagination-list {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.typography.fonts.body};
    color: ${theme.color.text.text01};
    line-height: ${theme.lineHeight};
    padding: ${theme.spacing.spacing02};
    border-radius: ${theme.radius.md};
    margin: 0 ${theme.spacing.spacing01};
    background-color: ${theme.color.background.ui03};

    &:active {
      background-color: ${theme.color.interactive.secondaryActive};
    }

    &:focus {
      outline: 0;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: ${theme.color.interactive.secondaryHover};
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }

    span {
      min-width: 1.125rem;
      text-align: center;
    }

    &.current {
      background-color: ${theme.color.interactive.primary};
      color: ${theme.color.text.text04};
      font-weight: ${theme.fontWeights.medium};

      &:hover {
        background-color: ${theme.color.interactive.primaryHover};
        color: ${theme.color.text.text03};
      }
    }

    &.pagination-first,
    &.pagination-prev,
    &.pagination-last,
    &.pagination-next {
      background-color: transparent;
    }

    &.pagination-first {
      padding-left: ${theme.spacing.spacing01};

      svg {
        padding-left: 0;
        width: 1rem;
        height: 1rem;
      }
    }

    &.pagination-last {
      padding-right: ${theme.spacing.spacing01};

      svg {
        padding-right: 0;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  .dots {
    margin: 0 ${theme.spacing.spacing02};

    > * {
      margin-top: 0.125rem;
    }
  }
`;
