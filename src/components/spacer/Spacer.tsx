import styled, { css } from "styled-components/macro";

type SpacerProps = {
  className?: string;
  height?: number | string;
  width?: number | string;
  bgColor?: string;
  border?: string;
  margin?: number | string;
};

export const Spacer = styled.div<SpacerProps>`
  box-sizing: border-box;
  min-width: 0;
  ${(props) => css`
    height: ${props.height};
    width: ${props.width};
    background: ${props.bgColor || "transparent"};
    border: ${props.border};
    margin: ${props.margin};
  `}
`;
