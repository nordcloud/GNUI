import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import theme from "../../theme";

type DatepickerProps = {
  children?: any;
};

const DatepickerWrapper = styled.div`
  .rdrCalendarWrapper,
  .rdrDateRangePickerWrapper {
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    box-shadow: ${theme.shadow.shadow04};
    border-radius: ${theme.radiusDefault};
  }
  .rdrDateRangePickerWrapper {
    .rdrCalendarWrapper {
      box-shadow: none;
    }
  }
`;

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  children,
}) => <DatepickerWrapper>{children}</DatepickerWrapper>;
