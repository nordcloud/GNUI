import styled from "styled-components";
import theme from "../../theme";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { MultipleSelect } from "../selectbutton";

export const Row = styled(FlexContainer)`
  align-items: stretch;

  & + & {
    margin-top: ${theme.spacing.spacing03};
  }

  & > * {
    &:not(:last-child) {
      margin-right: ${theme.spacing.spacing03};
    }
  }

  label {
    display: block;
    margin-bottom: 0;
  }

  &.time-range-picker {
    font-size: ${theme.fontSizes.sm};

    ul {
      flex: 1;
    }
  }

  &.date-picker {
    .date-options {
      flex: 1;

      ul {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }

      .date-value {
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeights.medium};
        line-height: ${theme.lineHeight};
      }
    }
  }
`;

export const IconButton = styled(Button)`
  padding: 16px 8px;
`;

export const DatepickerContainer = styled.div`
  position: relative;

  .calendar-panel {
    position: absolute;
    transform: translateX(-100%);
    margin-left: 100%;
    border: 1px solid ${theme.color.border.border01};
  }
`;

export const CustomTimeRangeSelector = styled(Row)<{ isVisible: boolean }>`
  align-items: center;
  visibility: hidden;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    `
  visibility: visible;
  opacity: 1;
`}

  input {
    height: 100%;
    padding: 0 ${theme.spacing.spacing03};
    border: 1px solid ${theme.color.border.input};
    border-radius: ${theme.radius.md};
    box-sizing: border-box;
  }

  button {
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.spacing.spacing02} ${theme.spacing.spacing03};
  }
`;

export const UnifiedMultipleSelect = styled(MultipleSelect)`
  li {
    flex: 1;

    button {
      width: 100%;
      height: 100%;

      &:not(.active):hover {
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }

      &.active:hover {
        cursor: default;
      }
    }
  }
`;
