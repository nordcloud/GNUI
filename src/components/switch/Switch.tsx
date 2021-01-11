import React, { FunctionComponent, ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { setColor } from "../../utils/setcolor";

export type SwitchProps = {
  labelText?: string;
  severity?: "danger" | "notification" | "warning" | "success";
  position?: "left" | "right";
} & ComponentPropsWithoutRef<"input">;

type SwitchInputProps = Pick<SwitchProps, "severity">;

const SwitchInput = styled.input<SwitchInputProps>`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .inner {
    background-color: ${theme.color.interactive.primary};
    ${({ severity }) =>
      severity &&
      css`
        background-color: ${setColor(severity)};
      `}

    &:before {
      transform: translateX(1.45rem);
      background-color: ${theme.color.background.ui02};
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
  border: 1px solid ${theme.color.border.input};
  background-color: ${theme.color.field.default};

  &:before {
    position: absolute;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    left: 2px;
    bottom: calc((100% - 1.125rem) / 2);
    background-color: ${theme.color.interactive.primary};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch: FunctionComponent<SwitchProps> = ({
  severity = "success",
  position = "right",
  labelText = "",
  id,
  ...props
}) => {
  const showLabel = labelText.length > 0;
  return (
    <SwitchLabel htmlFor={id}>
      {showLabel && position === "left" && (
        <LabelText position={position}>{labelText}</LabelText>
      )}
      <SwitchContainer>
        <SwitchInput type="checkbox" id={id} severity={severity} {...props} />
        <Inner className="inner" />
      </SwitchContainer>
      {showLabel && position === "right" && (
        <LabelText position={position}>{labelText}</LabelText>
      )}
    </SwitchLabel>
  );
};
