import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { darken, lighten } from "polished";
import { space, SpaceProps } from "styled-system";
import { SVGIcon } from "../svgicon";
import { Spinner } from "../spinner";

export interface ButtonProps {
  children?: string | React.ReactNode;
  severity?: "high" | "medium" | "low";
  size?: "sm" | "md";
  icon?: string;
  iconRight?: boolean;
  initialState?: string;
  color?: string;
  form?: string;
  select?: boolean;
  type?: any;
  disabled?: boolean;
  className?: string;
  title?: string;
  onClick?: (e: any) => void;

  outline?: boolean;
  secondary?: boolean;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const changeSize = (size: string) => {
  switch (size) {
    case "sm":
      return `
      font-size: ${theme.fontSizes.xs};
      padding: ${theme.spacing.spacing01};
      line-height: 0.875rem;
      span {
        padding: 0 ${theme.spacing.spacing01}
      }   
      svg, .spinner {
        padding: 0;
        width: ${theme.iconSize.sm};
        height: ${theme.iconSize.sm};
      }
      `;
    case "md":
      return `
      font-size: ${theme.fontSizes.sm};
      padding: ${theme.spacing.spacing02} ${theme.spacing.spacing02};
      span {
        padding: 0 ${theme.spacing.spacing01};
        line-height: 1rem;
      } 
      svg, .spinner {
        padding: 0;
        width: 1rem;
        height: 1rem;
      }
      `;
  }
};

const changeSeverity = (severity: string) => {
  switch (severity) {
    case "medium":
      return `
      background: transparent;
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      svg {
        fill: ${theme.colors.primary};
      }
      .spinner {
        div {
          border-color: ${theme.colors.primary} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.colors.lights[2]};
        color: ${theme.colors.primary};
        svg {
          fill: ${theme.colors.primary};
        }
      }
      &:active {
        background: ${theme.colors.lights[3]};
        svg {
          fill: ${theme.colors.primary};
        }
      }
      `;
    case "low":
      return `
      background: ${theme.colors.lights[1]};
      color: ${theme.colors.primary};
      border: none;
      svg {
        fill: ${theme.colors.primary};
      }
      .spinner {
        div {
          border-color: ${theme.colors.primary} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.colors.lights[2]};
        color: ${theme.colors.primary};
        svg {
          fill: ${theme.colors.primary};
        }
      }
      &:active {
        background: ${theme.colors.lights[3]};

        svg {
          fill: ${theme.colors.primary};
        }
      }
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  background: ${theme.colors.primary};
  white-space: nowrap;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.snowWhite};
  border: ${theme.borders.transparent};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeight};
  transition: ${theme.transition};
  display: flex;
  flex-direction: ${(props: ButtonProps) =>
    props.iconRight ? "row-reverse" : "row"};
  align-items: center;

  span {
    padding: 0 ${theme.spacing.spacing02};
  }

  svg {
    transition: ${theme.transition};
    fill: ${theme.colors.snowWhite};
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.125rem;
  }

  .spinner {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      transition: ${theme.transition};
      border-color: ${
        theme.colors.snowWhite
      } transparent transparent transparent;
    }
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    svg {
      fill: ${theme.colors.lights[4]};
    }
    cursor: pointer;
    color: ${theme.colors.lights[4]};
    background: ${darken(0.1, theme.colors.primary)}};
  }
  &:active {
    color: ${theme.colors.darks[4]};

    svg {
      fill: ${theme.colors.darks[4]};
    }
  }
  &:disabled {
    background: ${theme.colors.lights[2]};
    border-color: transparent;
    color: ${theme.colors.lights[4]};
    &:hover {
      border-color: transparent;
      background: ${theme.colors.lights[2]};
      color: ${theme.colors.lights[4]};
      cursor: not-allowed;
      border-radius: ${theme.radiusDefault};
    }
  }

  ${({ severity }) =>
    severity &&
    css`
      ${changeSeverity(severity)}
    `}

  ${({ size }) =>
    size &&
    css`
      ${changeSize(size)}
    `};

  ${({ color }) =>
    color &&
    css`
      background-color: ${(props: ButtonProps) =>
        props.severity === "medium" ? "transparent" : setColor(color)};
      color: ${(props: ButtonProps) =>
        props.severity === "medium" ? setColor(color) : theme.colors.snowWhite};
      border: 1px solid ${setColor(color)};
      &:hover,
      &:active,
      &:disabled,
      &:disabled:hover {
        color: ${theme.colors.lights[4]};
      }
      svg {
        fill: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? setColor(color)
            : theme.colors.snowWhite};
      }
      .spinner {
        div {
          border-color: ${(props: ButtonProps) =>
              props.severity === "medium"
                ? setColor(color)
                : theme.colors.snowWhite}
            transparent transparent transparent;
        }
      }
      &:hover {
        color: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? setColor(color)
            : theme.colors.snowWhite};
        background-color: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? lighten(0.35, setColor(color))
            : darken(0.1, setColor(color))};
        svg {
          fill: ${(props: ButtonProps) =>
            props.severity === "medium"
              ? darken(0.1, setColor(color))
              : theme.colors.snowWhite};
        }
      }
      &:active {
        background: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? lighten(0.25, setColor(color))
            : darken(0.2, setColor(color))};
      }
    `}

  ${space}
`;

export const Button: FunctionComponent<ButtonProps & SpaceProps> = ({
  children,
  icon,
  initialState,
  ...props
}) => {
  switch (initialState) {
    case "success":
      return (
        <>
          <StyledButton {...props}>
            <SVGIcon name="success" />
            {children ? <span>{children}</span> : <></>}
          </StyledButton>
        </>
      );
    case "error":
      return (
        <>
          <StyledButton {...props}>
            <SVGIcon name="danger" />
            {children ? <span>{children}</span> : <></>}
          </StyledButton>
        </>
      );
    case "loading":
      return (
        <>
          <StyledButton {...props}>
            <div className={"spinner"}>
              <Spinner size="sm" />
            </div>
            {children ? <span>{children}</span> : <></>}
          </StyledButton>
        </>
      );
    default:
      return (
        <>
          {icon ? (
            <StyledButton {...props}>
              <SVGIcon name={icon} />
              {children ? <span>{children}</span> : <></>}
            </StyledButton>
          ) : (
            <StyledButton {...props}>
              <span>{children}</span>
            </StyledButton>
          )}
        </>
      );
  }
};
