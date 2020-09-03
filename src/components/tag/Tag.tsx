import React from "react";
import styled from "styled-components";
import { SVGIcon } from "../svgicon";
import theme from "../../theme";

interface TagProps {
  color?: string;
  text?: string;
  onClick?: () => void;
  showClose?: boolean;
}

export const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.sm};
  line-height: ${theme.lineHeight};
  padding: 0 ${theme.spacing.spacing03};
  margin: ${theme.spacing.spacing01};
  border-radius: 1rem;
  color: ${theme.colors.lights[0]};
  background-color: ${({ color }) =>
    color ? theme.colors[color] || color : theme.colors.lights[3]};
  cursor: ${({ onClick }) => onClick && "pointer"};
  span {
    width: 0.8rem;
    height: 0.8rem;
    display: block;
    font-size: 0.5rem;
    font-weight: bold;
    margin-left: 0.4rem;
    margin-bottom: 0.2rem;
    transform: translate(2px, 1px);
  }
  &:hover {
    opacity: ${({ onClick }) => onClick && "0.8"};
  }
`;

export const Tag: React.FC<TagProps> = ({
  color,
  text,
  onClick,
  showClose,
}) => {
  return (
    <StyledTag color={color} onClick={onClick}>
      {text || "No data"}
      {showClose && (
        <span>
          <SVGIcon name="close" color="white" size="sm" />
        </span>
      )}
    </StyledTag>
  );
};
