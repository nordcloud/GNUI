import * as React from "react";
import { css, styled } from "styled-components";
import theme from "../../theme";
import { FlexContainer } from "../container";

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
    <FlexContainer>
      <StyledLabel required={required} {...props}>
        {name}
      </StyledLabel>
    </FlexContainer>
  );
}
