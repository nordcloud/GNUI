import * as React from "react";
import { darken } from "polished";
import styled, { css } from "styled-components";
import { space } from "styled-system";
import theme from "../../theme";
import { SingleColors, ThemeColors } from "../../theme/config";
import { SVGIcon, SVGIconProps } from "../svgicon";

type TagProps = {
  color?: SingleColors | ThemeColors;
  colorText?: SingleColors;
  text?: string;
  icon?: SVGIconProps["name"];
  onClick?: () => void;
  showClose?: boolean;
  isTransparent?: boolean;
};

function isSingleColor(
  value: SingleColors | ThemeColors
): value is SingleColors {
  return [
    "primary",
    "accent",
    "danger",
    "success",
    "warning",
    "notification",
    "black",
    "white",
    "snowWhite",
  ].includes(value);
}
function isSingleThemeColor(
  value: SingleColors | ThemeColors
): value is ThemeColors {
  return [
    "red",
    "redInverse",
    "pink",
    "purple",
    "indigo",
    "blue",
    "blueInverse",
    "grey",
    "greyInverse",
    "cyan",
    "teal",
    "green",
    "greenInverse",
    "lightGreen",
    "yellow",
    "orange",
    "orangeInverse",
  ].includes(value);
}

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
    
  ${({ color }) => {
    const checkColor = (c: SingleColors | ThemeColors) => {
      if (c && isSingleColor(c)) {
        return theme.colors[c];
      }
      if (c && isSingleThemeColor(c)) {
        return theme.color.support[c];
      }
      return c;
    };
    const checkColorForPolished = (
      polishedColor: SingleColors | ThemeColors
    ) => {
      return isSingleColor(polishedColor)
        ? checkColor(polishedColor)
        : polishedColor;
    };
    return (
      color &&
      css`
        background: ${checkColor(color)};
        color: ${theme.color.text.text04};
        svg {
          fill: ${theme.color.text.text04};
        }
        .tag-close-button {
          background: ${darken(0.1, checkColorForPolished(color))};
        }

        &:hover {
          background: ${darken(0.05, checkColorForPolished(color))};
        }
        &:active {
          background: ${darken(0.1, checkColorForPolished(color))};
        }
      `
    );
  }}
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
