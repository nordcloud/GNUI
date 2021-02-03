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
    background: ${theme.color.background.ui01};
    color: ${theme.color.text.text01};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    box-shadow: ${theme.shadow.shadow04};
    border-radius: ${theme.radiusDefault};
    .rdrMonthAndYearWrapper {
      button {
        background: ${theme.color.interactive.primary};
      }
      select {
        color: ${theme.color.text.text02};
        background: ${theme.color.background.ui04};
      }
    }
    .rdrDayPassive .rdrDayNumber span {
      color: ${theme.color.text.text03};
    }
    .rdrDayNumber span {
      color: ${theme.color.text.text01};
    }
  }
  .lfWGlK .rdrCalendarWrapper,
  .lfWGlK .rdrDateRangePickerWrapper {
    color: ${theme.color.text.text01};
  }
  .bocwVK .rdrCalendarWrapper,
  .bocwVK .rdrDateRangePickerWrapper {
  }
  .rdrDateRangePickerWrapper {
    .rdrCalendarWrapper {
      box-shadow: none;
    }
  }
  .rdrStaticRange {
    background: ${theme.color.interactive.secondary};
    border-color: ${theme.color.interactive.secondary};
    color: ${theme.color.text.text01};
  }
  .rdrDateDisplayItem {
    background-color: ${theme.color.interactive.secondary};
  }
  .rdrDateDisplayWrapper {
    background: ${theme.color.background.ui03};
  }
  .rdrInputRangeInput {
    background: ${theme.color.background.ui03};
  }
  .rdrStaticRange:hover .rdrStaticRangeLabel,
  .rdrStaticRange:focus .rdrStaticRangeLabel {
    background: ${theme.color.interactive.secondaryHover};
  }
  .rdrDefinedRangesWrapper {
    background: ${theme.color.interactive.secondary};
    border-color: ${theme.color.interactive.secondary};
  }
  .rdrInputRangeInput {
    color: ${theme.color.text.text01};
  }
`;

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  children,
}) => <DatepickerWrapper>{children}</DatepickerWrapper>;
