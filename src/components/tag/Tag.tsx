import * as React from "react";
import { darken } from "polished";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { SVGIcon, SVGIconProps } from "../svgicon";

type TagProps = {
  color?: SingleColors;
  colorText?: SingleColors;
  text?: string;
  icon?: SVGIconProps["name"];
  onClick?: () => void;
  showClose?: boolean;
  isTransparent?: boolean;
};

export const StyledTag = styled.div<TagProps>`
  display: flex;
  float: left;
  align-items: center;
  padding: 0;
  font-size: ${theme.fontSizes.sm};
  line-height: 1.5rem;
  background: ${theme.color.interactive.secondary};
  border-radius: ${theme.radius.xxl};
  margin: 0 4px 4px 0;

  .tag-icon,
  .tag-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
  }

  .tag-text {
    margin: 0 ${theme.spacing.spacing03};
  }

  .tag-icon {
    margin: 0;
    padding: ${theme.spacing.spacing01};
  }

  .tag-close-button {
    border-radius: ${theme.radius.xxl};
    background: ${theme.color.interactive.secondaryActive};
    margin: ${theme.spacing.spacing01};

    svg {
      width: 0.625rem;
      height: 0.625rem;
    }
  }

  &:hover {
    background: ${theme.color.interactive.secondaryHover};
    cursor: pointer;
  }
  &:active {
    background: ${theme.color.interactive.secondaryActive};
    cursor: pointer;
  }

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      background: transparent;
    `}

  ${({ icon }) =>
    icon &&
    css`
      .tag-text {
        margin-left: 0;
      }
    `}
    
  ${({ showClose }) =>
    showClose &&
    css`
      .tag-text {
        margin-right: ${theme.spacing.spacing01};
      }
    `}
    
  ${({ color }) =>
    color &&
    css`
      background: ${theme.colors[color] || color};
      color: ${theme.color.text.text04};
      svg {
        fill: ${theme.color.text.text04};
      }
      .tag-close-button {
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
      color: ${theme.colors[colorText]};
    `}
  ${space}
`;

export function Tag({
  color,
  colorText,
  text,
  icon,
  onClick,
  showClose,
  isTransparent,
  ...props
}: TagProps) {
  return (
    <StyledTag
      color={color}
      colorText={colorText}
      icon={icon}
      onClick={onClick}
      showClose={showClose}
      isTransparent={isTransparent}
      {...props}
    >
      {icon && (
        <div className="tag-icon">
          <SVGIcon name={icon} size="sm" />
        </div>
      )}
      {text && <div className="tag-text">{text}</div>}
      {showClose && (
        <div className="tag-close-button">
          <SVGIcon name="close" size="sm" />
        </div>
      )}
    </StyledTag>
  );
}
