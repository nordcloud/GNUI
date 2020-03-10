import React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface TagProps {
    className: string;
    text: string;
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
    &.success {
      background-color: ${theme.colors.success};
    }
    &.warning {
      background-color: ${theme.colors.warning};
    }
    &.danger {
      background-color: ${theme.colors.danger};
    }
    &.info {
      background-color: ${theme.colors.notification};
    }
    &.default {
        background-color: ${theme.colors.primary};
    }
  `;
  
  export const Tag: React.FC<TagProps> = ({ className, text }) => {
    return <StyledTag className={`tag ${className}`}>{text}</StyledTag>;
  };