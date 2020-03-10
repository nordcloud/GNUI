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
    font-family: ${theme.typography.fonts.headers};
    font-size: 0.75rem;
    line-height: 1.125rem;
    padding: 0 0.75rem;
    margin: 0.25rem;
    border-radius: 1rem;
    color: ${theme.colors.lights[0]};
    background-color: ${theme.colors.lights[3]};
    
    ${({ color }) =>
    color === "success" &&
    css`
      background-color: ${theme.colors.success};
    `}
    ${({ color }) =>
    color === "warning" &&
    css`
      background-color: ${theme.colors.warning};
    `}
    ${({ color }) =>
    color === "danger" &&
    css`
      background-color: ${theme.colors.danger};
    `}
    ${({ color }) =>
    color === "info" &&
    css`
      background-color: ${theme.colors.notification};
    `}
    ${({ color }) =>
    color === "default" &&
    css`
      background-color: ${theme.colors.primary};
    `}
  `;
  
  export const Tag: React.FC<TagProps> = ({ color, text }) => {
    return <StyledTag color={color}>{text || "No data"}</StyledTag>;
  };