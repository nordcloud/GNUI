import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";
import { StyledInput } from "./Input";
import { InputProps } from "./types";

const StyledUpload = styled.div`
  color: ${theme.color.text.primary};
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

type UploadProps = {} & Omit<InputProps, "type">;

export const Upload: FunctionComponent<UploadProps> = React.forwardRef(
  ({ placeholder, id = "upload-file", ...props }, ref) => (
    <StyledUpload>
      <StyledLabel htmlFor={id}>
        {placeholder}
        <SVGIcon name="plus" />
      </StyledLabel>
      <StyledInput type="file" id={id} {...props} ref={ref} />
    </StyledUpload>
  )
);
