import * as React from "react";
import { styled } from "styled-components";
import { mainCss } from "./styles";

type DatepickerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const DatepickerWrapper = styled.div`
  ${mainCss}
`;

export function Datepicker({ children, ...props }: DatepickerProps) {
  return <DatepickerWrapper {...props}>{children}</DatepickerWrapper>;
}
