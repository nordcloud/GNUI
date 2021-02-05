import React, { FunctionComponent } from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import theme from "../../theme";

type DatepickerProps = {
  children?: any;
};

const DatepickerWrapper = styled.div`
  .rdrCalendarWrapper,
  .rdrDateRangePickerWrapper {
    overflow: hidden;
    background: ${theme.color.background.ui01};
    color: ${theme.color.text.text01};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    border-radius: ${theme.radiusDefault};
    box-shadow: ${theme.shadow.shadow04};

    .rdrMonthAndYearWrapper {
      background: ${theme.color.background.ui03};
      border-bottom: 1px solid ${theme.color.border.border01};
      padding: ${theme.spacing.spacing02} 0;
      button {
        background: ${theme.color.interactive.secondary};
        width: 2rem;
        height: 2rem;
        border-radius: ${theme.radius.sm};
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          margin: 0;
        }
        &.rdrPprevButton {
          i {
            border-color: transparent ${theme.color.interactive.primary}
              transparent transparent;
          }
        }
        &.rdrNextButton {
          i {
            border-color: transparent transparent transparent
              ${theme.color.interactive.primary};
          }
        }
      }
      select {
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.sm};
        color: ${theme.color.text.text01};
        background: ${theme.color.field.default};
        border: 1px solid ${theme.color.border.input};
        padding: 0.5rem;
      }
    }
    .rdrMonth {
      padding: ${theme.spacing.spacing02};
      .rdrMonthName {
        padding-top: 0;
        font-family: ${theme.fonts.body};
        font-size: ${theme.fontSizes.sm};
        color: ${theme.color.text.text02};
        font-weight: ${theme.fontWeights.medium};
      }
      .rdrWeekDays {
        .rdrWeekDay {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.sm};
          color: ${theme.color.text.text02};
          font-weight: ${theme.fontWeights.medium};
        }
      }
      .rdrDays {
        .rdrDay {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.sm};
          color: ${theme.color.text.text01};
          .rdrDayNumber {
            font-weight: ${theme.fontWeights.regular};
            span {
              color: ${theme.color.text.text01};
              &:after {
                background: ${theme.color.interactive.primary};
              }
            }
          }
          .rdrSelected,
          .rdrStartEdge,
          .rdrEndEdge,
          .rdrInRange {
            background: ${theme.color.interactive.secondaryActive};
          }

          .rdrDayStartPreview,
          .rdrDayInPreview,
          .rdrDayEndPreview {
            border-color: ${theme.color.interactive.primary};
          }
          &.rdrDayPassive {
            .rdrDayNumber {
              span {
                color: ${theme.color.text.text03};
              }
            }
          }
        }
      }
    }
  }
  .rdrDateRangePickerWrapper {
    .rdrDefinedRangesWrapper {
      background: ${theme.color.background.ui03};
      border-color: ${theme.color.border.border01};

      .rdrStaticRanges {
        .rdrStaticRange {
          border-color: ${theme.color.border.border01};
          .rdrStaticRangeLabel {
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.sm};
            background: ${theme.color.background.ui03};
            color: ${theme.color.text.text01};
          }
          &:hover,
          &:focus {
            .rdrStaticRangeLabel {
              background: ${theme.color.interactive.secondary};
            }
          }
          &.rdrStaticRangeSelected {
            .rdrStaticRangeLabel {
              color: ${theme.color.text.text01};
              font-weight: ${theme.fontWeights.regular};
              background: ${theme.color.interactive.secondaryActive};
            }
          }
        }
      }
    }
    .rdrCalendarWrapper {
      box-shadow: ${theme.shadow.shadow00};

      .rdrDateDisplayWrapper {
        background: ${theme.color.background.ui03};
        border-bottom: 1px solid ${theme.color.border.border01};

        .rdrDateDisplay {
          padding: ${theme.spacing.spacing03};
          margin: 0;

          .rdrDateInput {
            color: ${theme.color.text.text02};
            box-shadow: ${theme.shadow.shadow00};
            border: 0;
            overflow: hidden;
            border-radius: ${theme.radius.sm};

            input {
              font-family: ${theme.fonts.body};
              font-size: ${theme.fontSizes.sm};
              background: ${theme.color.interactive.secondary};
              color: ${theme.color.text.text01};
            }

            &.rdrDateDisplayItemActive {
              border: 0;

              input {
                background: ${theme.color.interactive.secondaryActive};
              }
            }
          }
        }
      }
    }
  }
`;

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  children,
}) => <DatepickerWrapper>{children}</DatepickerWrapper>;
