import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";
import { InputProps, StyledInput } from "./Input";

const StyledUpload = styled.div`
  input[type="file"] {
    display: none;
  }
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  transition: ${theme.transition};
  line-height: ${theme.lineHeight};
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

interface UploadProps extends Omit<InputProps, "type"> {}

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
