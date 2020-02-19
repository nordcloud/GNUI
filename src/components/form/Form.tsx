import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface FormProps {
  className: string;
  width?: string;
}

const StyledForm = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: ${theme.fontFamily.regular};
  font-weight: ${theme.fontWeights.regular};
  line-height: 1.5rem;
  font-size: 1rem;
  width: ${props => (props.width ? props.width : "100%")};
`;

export const Form: React.FC<FormProps> = props => (
  <StyledForm {...props}>{props.children}</StyledForm>
);
