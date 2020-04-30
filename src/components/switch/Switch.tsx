import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface SwitchProps {
  name?:string;
  isChecked?:string;
  labelText?: string;
  severity?: "danger" | "notification" | "warning" | "success";
  position?: "left" | "right";
  onChange?: (e: React.MouseEvent) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const SwitchInput = styled.input<SwitchProps>`
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
      -webkit-transform: translateX(1.45rem);
      -ms-transform: translateX(1.45rem);
      transform: translateX(1.45rem);
      background-color: ${theme.colors.white};
    }
  }
`;

const LabelText = styled.div<SwitchProps>`
  display:inline-block;
  margin-right: ${theme.spacing.spacing02};

  ${({ position }) =>
    position === "left" ?
    css`
      margin-right: ${theme.spacing.spacing02};
      margin-left: 0;
    `
    :
    css`
      margin-left: ${theme.spacing.spacing02};
      margin-right: 0;
    `}
`;

const SwitchContainer = styled.div<SwitchProps>`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
`;

const SwitchLabel = styled.label`
  display:flex;
  align-items:center;
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.regular};
`;

const Inner = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 0.75rem;
  border: ${theme.borders.disabled};
  background-color:${theme.colors.lights[0]};

  &:before {
    position: absolute;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    left: 2px;
    bottom: calc((100% - 1.125rem)/2);
    background-color: ${theme.colors.lights[3]};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

export const Switch: FunctionComponent<SwitchProps> = ({ 
  name,
  severity,
  position,
  labelText,
  isChecked
}) => {
  const [isActive, setActive] = useState(false);
  const handleSelect = () => setActive(!isActive);
  
  return (
    <SwitchLabel htmlFor={name}>
      {(position === "left") && <LabelText position={position}>{labelText}</LabelText>}
      <SwitchContainer>
        <SwitchInput 
          type="checkbox"
          id={name}
          isChecked={isActive.toString()}
          severity={severity}
          className={isActive ? "active" : ""}
          onChange={handleSelect}
        />
        <Inner className="inner" />
      </SwitchContainer>
      {(position === "right" || position === undefined) && <LabelText position={position}>{labelText}</LabelText>}
    </SwitchLabel>
)};
