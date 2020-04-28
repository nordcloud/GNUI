import React, { FunctionComponent, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface TooltipProps {
  name?: string;
  caption?: string;
  position?: "left" | "right" | "top" | "bottom";
  arrowPosition?: "left" | "right";
  status?: "danger" | "warning" | "success" | "notification";
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const TooltipWrapper = styled.div`
  position:relative;
`;

const StyledTooltip = styled.div<TooltipProps>`
  border: ${theme.borderDefault}; 
  border-radius: ${theme.radiusDefault};
  background: ${theme.colors.primary};
  padding: ${theme.spacing.spacing01};
  transition: ${theme.transition};
  position: absolute;
  left: calc(100% + 8px);
  top: auto;
  text-align:center;
  display:none;
  min-width:90px;

  &.hovered {
    display:block;
    z-index: ${theme.zindex.masked};
  }

  ${({ status }) =>
    status &&
    css`
      border: 1px solid ${setColor(status)}; 
      background: ${setColor(status)};
  `}

  &.right {
    right:calc(100% + 8px);
    left: auto;
  }
  &.top {
    bottom: calc(100% + 8px);
    left: -4px;
  }
  &.bottom {
    top: calc(100% + 8px);
    left: -4px;
    right:0;
  }
`;

const TooltipLabel = styled.div<TooltipProps>` 
  margin:0;
  color: ${theme.colors.white};
  line-height: ${theme.lineHeight};
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeights.regular};
  font-family: ${theme.fonts.body};
`;

const TooltipChildren = styled.div<TooltipProps>` 
  position:relative;
  display:inline-flex;
  align-items:center;

  p {
    margin:0;
    display:inline-block;
  }
`;

const TooltipArrow = styled.div<TooltipProps>` 
  content:'';
  display:block;
  width:0;
  height:0;
  position:absolute;
  left:-8px;
  top: calc(50% - 7px);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid ${theme.colors.primary}; 

  &.left {
    ${({ status }) =>
    status &&
    css`
      border-right: 8px solid ${setColor(status)}; 
  `}
  }

  &.right {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid ${theme.colors.primary}; 
    border-right:none;
    top: calc(50% - 7px);
    left:auto;
    right:-8px;
    ${({ status }) =>
    status &&
    css`
      border-left: 8px solid ${setColor(status)}; 
  `}
  }
  &.top {
    border-top: 8px solid ${theme.colors.primary};
    border-right: 8px solid transparent; 
    border-left: 8px solid transparent;
    border-bottom: none;
    bottom: -8px;
    top:auto;
    left: calc(50% - 7px);
    ${({ status }) =>
    status &&
    css`
      border-top: 8px solid ${setColor(status)};
  `}
  }
  &.bottom {
    border-top: none;
    border-right: 8px solid transparent; 
    border-left: 8px solid transparent;
    border-bottom: 8px solid ${theme.colors.primary};
    top: -8px;
    bottom:auto;
    left: calc(50% - 7px);
    ${({ status }) =>
    status &&
    css`
      border-bottom: 8px solid ${setColor(status)};
  `}
  }

  &.top, &.bottom {
    ${({ arrowPosition }) => {
      switch (arrowPosition) {
        case "left":
          return css`
            left: 12px;
            right: auto;
        `
        case "right":
          return css`
            right: 12px;
            left:auto;
        `
        default:
          return css`
            left: calc(50% - 7px);
            right:auto;
        `
      }
    }
  }
  }
`;

export const Tooltip: FunctionComponent<TooltipProps> = ({ 
  name,
  status,
  position,
  arrowPosition,
  caption,
  children
}) => {
  const [isHovered, setHovered] = useState(false);
  const [resetTimer, setTimer] = useState(0);

  const toggleHover = () => {
    clearTimeout(resetTimer);
    setHovered(true);

    const timer = () => setTimeout(() => {
      setHovered(false)
    }, 1500);

    setTimer(timer);
  }
  const tooltipShow = isHovered ? 'hovered' : '';
  const classesArrow = arrowPosition ? `${position} arrow-${arrowPosition}` : `${position}`;
  const classesTooltip = position ? `${position} ${tooltipShow}` : `left ${tooltipShow}`;
  return (
    <TooltipWrapper>
      <TooltipChildren 
        onMouseOver={toggleHover}>
          <StyledTooltip
            status={status}
            name={name}
            position={position}
            arrowPosition={arrowPosition}
            className={classesTooltip}>
            <TooltipArrow status={status} className={classesArrow} arrowPosition={arrowPosition} />
            <TooltipLabel>{caption}</TooltipLabel>
          </StyledTooltip>
        {children}
      </TooltipChildren>
    </TooltipWrapper>
)};
