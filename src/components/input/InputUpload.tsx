import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";
import { StyledInput } from "./styles";
import { StyledInputProps } from "./types";

const StyledUpload = styled.div`
  color: ${theme.color.text.text01};
  background: ${theme.color.field.default};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};

  input[type="file"] {
    display: none;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  border: ${theme.borders.disabled};
  border-radius: ${theme.radiusDefault};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem;
`;

type UploadProps = Omit<StyledInputProps, "type">;

export const Upload = React.forwardRef(
  (
    { placeholder, id = "upload-file", ...props }: UploadProps,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <StyledUpload>
      <StyledLabel htmlFor={id}>
        {placeholder}
        <SVGIcon name="plus" />
      </StyledLabel>
      <StyledInput type="file" id={id} {...props} ref={ref} />
    </StyledUpload>
  )
);
