import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { themeCss, mainCss, customCss } from "./styles";

type DatepickerProps = {
  children?: React.ReactNode;
};

const DatepickerWrapper = styled.div`
  ${mainCss}
  ${themeCss}
  ${customCss}
`;

export const Datepicker: FunctionComponent<DatepickerProps> = ({
  children,
}) => <DatepickerWrapper>{children}</DatepickerWrapper>;
