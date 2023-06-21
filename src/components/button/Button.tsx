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
  React.ComponentProps<T> & {
    children?: React.ReactNode | string;
    severity?: "high" | "low" | "medium";
    status?:
      "accent" | "danger" | "discovery" | "notification" | "success" | "warning";
    size?: "md" | "sm";
    icon?: SVGIconProps["name"];
    iconRight?: boolean;
    initialState?: string;
    color?: SingleColors;
    form?: string;
    select?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    as?: T;
    linkTo?: string;
    display?: "flex" | "inline-flex";
    outline?: boolean;
    secondary?: boolean;
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
    default:
      return "";
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
    default:
      return "";
  }
};

const changeStatus = (status?: ButtonProps["status"]) => {
  switch (status) {
    case "danger":
      return {
        default: theme.color.interactive.error,
        hover: theme.color.interactive.errorHover,
        active: theme.color.interactive.errorActive,
      };
    case "warning":
      return {
        default: theme.color.interactive.warning,
        hover: theme.color.interactive.warningHover,
        active: theme.color.interactive.warningActive,
      };
    case "success":
      return {
        default: theme.color.interactive.success,
        hover: theme.color.interactive.successHover,
        active: theme.color.interactive.successActive,
      };
    case "notification":
      return {
        default: theme.color.interactive.info,
        hover: theme.color.interactive.infoHover,
        active: theme.color.interactive.infoActive,
      };
    case "discovery":
      return {
        default: theme.color.interactive.primary,
        hover: theme.color.interactive.primaryHover,
        active: theme.color.interactive.primaryActive,
      };
    case "accent":
      return {
        default: theme.color.interactive.accent,
        hover: theme.color.interactive.accentHover,
        active: theme.color.interactive.accentActive,
      };
    default:
      return null;
  }
};

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
  flex-direction: ${(props: ButtonProps) =>
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

  ${({ status }) =>
    status &&
    css`
      background: ${changeStatus(status)?.default};
      &:hover {
        background: ${changeStatus(status)?.hover};
      }
      &:active {
        background: ${changeStatus(status)?.active};
      }
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
          border-color: ${(props: ButtonProps) =>
              props.severity === "medium"
                ? setColor(color)
                : theme.color.text.text04}
            transparent transparent transparent;
        }
      }
      &:hover {
        color: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? setColor(color)
            : theme.color.text.text04};
        background-color: ${(props: ButtonProps) =>
          props.severity === "medium"
            ? lighten(0.35, setColor(color))
            : darken(0.1, setColor(color))};
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

export function Button<T extends React.ElementType = "button">({
  children,
  icon,
  initialState,
  linkTo,
  ...props
}: ButtonProps<T> & SpaceProps) {
  return (
    <StyledButton
      as={linkTo ? "a" : "button"}
      href={linkTo}
      linkTo={linkTo}
      {...props}
    >
      <ButtonIcon {...{ initialState, icon }} />
      {children && <span>{children}</span>}
    </StyledButton>
  );
}

type ButtonIconProps = Pick<ButtonProps, "icon" | "initialState">;

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
