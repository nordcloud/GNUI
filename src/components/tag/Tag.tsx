import React from "react";
import styled from "styled-components";
import theme from "../../theme";

interface TagProps {
  color?: string;
  text?: string;
  onClick?: () => void;
  showClose?: boolean;
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
  cursor: ${({ onClick }) => onClick && "pointer"};
  span {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.3);
    display: block;
    float: right;
    font-size: 0.5rem;
    line-height: 0.82rem;
    font-weight: bold;
    margin: 0.2rem 0 0 0.4rem;
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
      {showClose && <span>x</span>}
    </StyledTag>
  );
};
