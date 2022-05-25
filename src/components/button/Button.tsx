import * as React from "react";
import { darken, lighten } from "polished";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import theme from "../../theme";
import { SingleColors } from "../../theme/config";
import { setColor } from "../../utils/setcolor";
import { Spinner } from "../spinner";
import { SVGIcon, SVGIconProps } from "../svgicon";

export type ButtonProps<T extends React.ElementType = "button"> =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: string | React.ReactNode;
    severity?: "high" | "medium" | "low";
    size?: "sm" | "md";
    icon?: SVGIconProps["name"];
    iconRight?: boolean;
    initialState?: string;
    color?: SingleColors;
    form?: string;
    select?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    as?: T;
    linkTo?: string;
    display?: "flex" | "inline-flex";
    outline?: boolean;
    secondary?: boolean;
  } & React.ComponentProps<T>;

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
      border-color: ${theme.color.interactive.primary};
      color: ${theme.color.text.text01};
      .spinner {
        div {
          border-color: ${theme.color.text.text01} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.color.interactive.secondary};
        color: ${theme.color.text.text01};
      }
      &:active {
        background: ${theme.color.interactive.secondaryHover};
      }
      `;
    case "low":
      return `
      background: ${theme.color.interactive.secondary};
      color: ${theme.color.text.text01};
      border: none;
      .spinner {
        div {
          border-color: ${theme.color.text.text01} transparent transparent
            transparent;
        }
      }
      &:hover {
        background: ${theme.color.interactive.secondaryHover};
        color: ${theme.color.text.text01};
      }
      &:active {
        background: ${theme.color.interactive.secondaryActive};
      }
      `;
  }
};

/* eslint-disable sonarjs/no-identical-functions */
const StyledButton = styled.button<ButtonProps<React.ElementType>>`
  background: ${theme.color.interactive.primary};
  white-space: nowrap;
  font-family: ${theme.fonts.body};
  color: ${theme.color.text.text04};
  border: ${theme.borders.transparent};
  font-weight: ${theme.fontWeights.regular};
  padding: ${theme.spacing.spacing02};
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeight};
  text-decoration: none;
  display: ${({ display, linkTo }) =>
    !display && linkTo ? "inline-flex" : display || "flex"};
  flex-direction: ${(props: ButtonProps<React.ElementType>) =>
    props.iconRight ? "row-reverse" : "row"};
  align-items: center;
  text-transform: ${theme.typography.titleCase};

  span {
    padding: 0 ${theme.spacing.spacing02};
  }

  svg {
    fill: currentColor;
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
      border-color: ${theme.color.text.text04} transparent transparent
        transparent;
    }
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    color: ${theme.color.text.text04};
    background: ${theme.color.interactive.primaryHover};
    text-decoration: none;
  }

  &:active {
    color: ${theme.color.text.text04};
    background: ${theme.color.interactive.primaryActive};

    svg {
      fill: ${theme.color.text.text02};
    }
  }

  &:disabled {
    background: ${theme.color.interactive.disabled};
    border-color: transparent;
    color: ${theme.color.text.text03};

    &:hover {
      border-color: transparent;
      background: ${theme.color.interactive.disabled};
      color: ${theme.color.text.text03};
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
      background-color: ${(props: ButtonProps<React.ElementType>) =>
        props.severity === "medium" ? "transparent" : setColor(color)};
      color: ${(props: ButtonProps<React.ElementType>) =>
        props.severity === "medium"
          ? setColor(color)
          : theme.color.text.text04};
      border: 1px solid ${setColor(color)};
      &:hover,
      &:active,
      &:disabled,
      &:disabled:hover {
        color: ${theme.color.interactive.disabled};
      }
      .spinner {
        div {
          border-color: ${(props: ButtonProps<React.ElementType>) =>
              props.severity === "medium"
                ? setColor(color)
                : theme.color.text.text04}
            transparent transparent transparent;
        }
      }
      &:hover {
        color: ${(props: ButtonProps<React.ElementType>) =>
          props.severity === "medium"
            ? setColor(color)
            : theme.color.text.text04};
        background-color: ${(props: ButtonProps<React.ElementType>) =>
          props.severity === "medium"
            ? lighten(0.35, setColor(color))
            : darken(0.1, setColor(color))};
      }
      &:active {
        background: ${(props: ButtonProps<React.ElementType>) =>
          props.severity === "medium"
            ? lighten(0.25, setColor(color))
            : darken(0.2, setColor(color))};
      }
    `}
  ${space}
`;

export function Button<T extends React.ElementType = "button">({
  children,
  icon,
  initialState,
  linkTo,
  display,
  ...props
}: ButtonProps<T> & SpaceProps) {
  return (
    <StyledButton
      as={linkTo ? "a" : "button"}
      display={display}
      href={linkTo}
      linkTo={linkTo}
      {...props}
    >
      <ButtonIcon {...{ initialState, icon }} />
      {children && <span>{children}</span>}
    </StyledButton>
  );
}

type ButtonIconProps = Pick<ButtonProps, "initialState" | "icon">;

function ButtonIcon({ initialState, icon }: ButtonIconProps) {
  switch (initialState) {
    case "success":
      return <SVGIcon name="success" />;
    case "error":
      return <SVGIcon name="danger" />;
    case "loading":
      return (
        <div className="spinner">
          <Spinner size="sm" />
        </div>
      );
    default:
      return icon ? <SVGIcon name={icon} /> : null;
  }
}
