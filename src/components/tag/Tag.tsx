import React from "react";
import styled, { css } from "styled-components";
import { SVGIcon } from "../svgicon";
import theme from "../../theme";
import { darken } from "polished";
import { space } from "styled-system";

type TagProps = {
  color?: string;
  colorText?: string;
  text?: string;
  icon?: string;
  onClick?: () => void;
  showClose?: boolean;
};

export const StyledTag = styled.div<TagProps>`
  display: flex;
  float: left;
  align-items: center;
  padding: 0 ${theme.spacing.spacing03};
  font-size: ${theme.fontSizes.sm};
  line-height: 1.5rem;
  background: ${theme.colors.lights[2]};
  border-radius: ${theme.radius.xxl};
  margin: 0 4px 4px 0;

  .tag__icon,
  .tag__close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
  }

  .tag__icon {
    margin: 0 0.25rem 0 -0.375rem;
  }

  .tag__close-button {
    border-radius: ${theme.radius.xxl};
    background: ${darken(0.1, theme.colors.lights[2])};
    margin: 0 -0.375rem 0 0.5rem;

    svg {
      width: 0.625rem;
      height: 0.625rem;
    }
  }

  &:hover {
    background: ${darken(0.05, theme.colors.lights[2])};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    .tag__text {
      transition: all 0.2s ease-in-out;
      opacity: 0.8;
    }
  }
  &:active {
    background: ${darken(0.1, theme.colors.lights[2])};
    cursor: pointer;
  }

  ${({ color }) =>
    color &&
    css`
      background: ${theme.colors[color] || color};
      color: ${theme.colors.snowWhite};
      svg {
        fill: ${theme.colors.snowWhite};
      }
      .tag__close-button {
        background: ${darken(0.1, theme.colors[color] || color)};
      }

      &:hover {
        background: ${darken(0.05, theme.colors[color] || color)};
      }
      &:active {
        background: ${darken(0.1, theme.colors[color] || color)};
      }
    `}
  ${({ colorText }) =>
    colorText &&
    css`
      color: ${theme.colors[colorText] || colorText};
    `}
  ${space}
`;

export const Tag: React.FC<TagProps> = ({
  color,
  colorText,
  text,
  icon,
  onClick,
  showClose,
  ...props
}) => {
  return (
    <StyledTag colorText={colorText} color={color} onClick={onClick} {...props}>
      {icon && (
        <div className="tag__icon">
          <SVGIcon name={icon} size="sm" />
        </div>
      )}
      <div className="tag__text">{text || "No data"}</div>
      {showClose && (
        <div className="tag__close-button">
          <SVGIcon name="close" size="sm" />
        </div>
      )}
    </StyledTag>
  );
};
