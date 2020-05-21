import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface TagProps {
  color?: string;
  text?: string;
}

export const StyledTag = styled.div`
  display: inline-block;
  text-transform: capitalize;
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight};
  padding: 0 ${theme.spacing.spacing03};
  margin: ${theme.spacing.spacing01};
  border-radius: 1rem;
  color: ${theme.colors.lights[0]};
  background-color: ${({ color }) =>
    color ? theme.colors[color] || color : theme.colors.lights[3]};
`;

export const Tag: React.FC<TagProps> = ({ color, text }) => {
  return <StyledTag color={color}>{text || "No data"}</StyledTag>;
};
