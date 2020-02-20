import * as React from "react";
import styled from "styled-components";
import { Flex } from "../container";

const StyledForm = styled(Flex)`
  flex-wrap: wrap;
`;

export const Form: React.FC = props => (
  <StyledForm {...props}>{props.children}</StyledForm>
);
