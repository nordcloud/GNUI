import * as React from "react";
import styled from "styled-components";
import { mainCss } from "./styles";

type DatepickerProps = {
  children?: React.ReactNode;
};

const DatepickerWrapper = styled.div`
  ${mainCss}
`;

export function Datepicker({ children }: DatepickerProps) {
  return <DatepickerWrapper>{children}</DatepickerWrapper>;
}
