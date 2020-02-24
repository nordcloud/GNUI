import React, { FunctionComponent } from "react";
import { Container } from "../container";
import { InputProps } from "../input";

export const Form: FunctionComponent<InputProps> = ({ children }) => (
  <Container>{children}</Container>
);
