import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Flex } from "../container";

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  name?: string;
};

const StyledLabel = styled.label<Pick<Props, "required">>`
  line-height: ${theme.lineHeight};
  color: ${theme.color.text.text01};
  margin-bottom: ${theme.spacing.spacing02};
  text-transform: ${theme.typography.titleCase};

  ${({ required }) =>
    required &&
    css`
      &:after {
        content: "*";
        color: ${theme.color.text.error};
        margin-left: ${theme.spacing.spacing01};
      }
    `}
`;

export function Label({ name = "Label", required = false, ...props }: Props) {
  return (
    <Flex>
      <StyledLabel required={required} {...props}>
        {name}
      </StyledLabel>
    </Flex>
  );
}
