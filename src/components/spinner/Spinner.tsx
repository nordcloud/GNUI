import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Text } from "../text";

export interface SpinnerProps {
  caption?: string;
  className?: string;
  size?: number;
  color?: string;
  onClick?: (e: any) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const SpinnerContainer = styled.div<SpinnerProps>`
  display:flex;
  align-items:center;
  p {
    margin: 0 0 0 ${({ caption }) =>
    caption ?  theme.spacing.spacing02 : "0"};
  }
`;

const StyledRing = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  zoom: ${({ size }) =>
  size ? `${size}` : `1`};

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border: 0.5rem solid ${({ color }) =>
    color ? `${setColor(color)}` : `${theme.colors.primary}`};
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) =>
    color ? `${setColor(color)}` : `${theme.colors.primary}`} transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: FunctionComponent<SpinnerProps> = ({
  caption,
  color,
  size
}) => {
  return (
    <SpinnerContainer caption={caption}>
      <StyledRing color={color} size={size}>
        <div></div><div></div><div></div><div></div>
      </StyledRing>
      {caption && <Text>{caption}</Text>}
    </SpinnerContainer>
  );
};
