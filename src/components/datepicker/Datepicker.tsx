import * as React from "react";
import styled from "styled-components";
import { mainCss } from "./styles";

type DatepickerProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DatepickerWrapper = styled.div`
  ${mainCss}
`;

export function Datepicker({ children, ...props }: DatepickerProps) {
  return <DatepickerWrapper {...props}>{children}</DatepickerWrapper>;
}
