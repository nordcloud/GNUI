import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface SwitchProps {
  id: string;
  isChecked: boolean;
  labelText?: string;
  severity?: "danger" | "notification" | "warning" | "success";
  position?: "left" | "right";
  handleSelect: (value: boolean) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

type SwitchInputProps = Pick<SwitchProps, "severity">;

const SwitchInput = styled.input<SwitchInputProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .inner {
    background-color: ${theme.colors.primary};
    ${({ severity }) =>
      severity &&
      css`
        background-color: ${setColor(severity)};
      `}

    &:before {
      transform: translateX(1.45rem);
      background-color: ${theme.colors.white};
    }
  }
`;

type LabelTextProps = Pick<SwitchProps, "position">;

const LabelText = styled.div<LabelTextProps>`
  display: inline-block;
  margin-right: ${theme.spacing.spacing02};

  ${({ position }) =>
    position === "left"
      ? css`
          margin-right: ${theme.spacing.spacing02};
          margin-left: 0;
        `
      : css`
          margin-left: ${theme.spacing.spacing02};
          margin-right: 0;
        `}
`;

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.md};
`;

const Inner = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 0.75rem;
  border: ${theme.borders.disabled};
  background-color: ${theme.colors.lights[0]};

  &:before {
    position: absolute;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    left: 2px;
    bottom: calc((100% - 1.125rem) / 2);
    background-color: ${theme.colors.lights[3]};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch: FunctionComponent<SwitchProps> = ({
  id,
  severity,
  position = "right",
  labelText = "",
  handleSelect,
  isChecked = false,
}) => {
  const showLabel = labelText.length > 0;
  return (
    <SwitchLabel htmlFor={id}>
      {showLabel && position === "left" && (
        <LabelText position={position}>{labelText}</LabelText>
      )}
      <SwitchContainer>
        <SwitchInput
          type="checkbox"
          id={id}
          checked={isChecked}
          severity={severity}
          className={isChecked ? "active" : ""}
          onChange={() => handleSelect(!isChecked)}
        />
        <Inner className="inner" />
      </SwitchContainer>
      {showLabel && position === "right" && (
        <LabelText position={position}>{labelText}</LabelText>
      )}
    </SwitchLabel>
  );
};
