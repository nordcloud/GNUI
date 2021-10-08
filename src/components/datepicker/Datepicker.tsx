import React from "react";
import styled from "styled-components";
import { themeCss, mainCss, customCss } from "./styles";

type DatepickerProps = {
  children?: any;
};

const DatepickerWrapper = styled.div`
  ${mainCss}
  ${themeCss}
  ${customCss}
`;

export function Datepicker({ children }: DatepickerProps) {
  return <DatepickerWrapper>{children}</DatepickerWrapper>;
}
