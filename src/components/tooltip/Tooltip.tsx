import React, { FunctionComponent, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

interface TooltipProps {
  caption: string;
  position?: "left" | "right";
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

const setArrowPosition = (position: string) => {
  switch (position) {
    case "left":
      return `
        left: 0.5rem;
        right: auto;
        margin-left: 0;
        `;
    case "right":
      return `
        left: auto;
        right: 0.5rem;
        margin-left: 0;
        `;
    default:
      return `
        left: 50%;
        margin-left: -0.25rem;
        right:auto;
      `;
  }
};

const TooltipWrapper = styled.div`
  display: inline-block;
`;

const StyledTooltip = styled.div<TooltipProps>`
  position: absolute;
  max-width: 256px;
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.snowWhite};
  border-radius: ${theme.radius.md};
  z-index: ${theme.zindex.sticky};
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  opacity: 0;
  animation-duration: 200ms;
  animation-fill-mode: both;
  -webkit-animation-duration: 200ms;
  -webkit-animation-fill-mode: both;

  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: transparent;
    border-top-color: ${theme.colors.primary};
    border-width: 8px;
    margin-left: -8px;

    ${({ position }) =>
      position &&
      css`
        ${setArrowPosition(position)}
      `}
  }

  ${({ status }) =>
    status &&
    css`
      background: ${setColor(status)};
      &:after {
        border-top-color: ${setColor(status)};
      }
    `}

  @keyframes fadeInUp {
    from {
      transform: translate3d(0, -8px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      transform: translate3d(0, -8px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

export const Tooltip: FunctionComponent<TooltipProps> = ({
  status,
  position,
  caption,
  children,
}) => {
  const tooltipRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isHovered, setHovered] = useState(false);
  const [resetTimer, setTimer] = useState(0);
  const [tooltipPosition, setPosition] = useState({
    marginTop: 0,
    width: 0,
  });

  const toggleOver = () => {
    clearTimeout(resetTimer);
    const timer = () =>
      setTimeout(() => {
        setHovered(true);
      }, 300);
    setTimer(timer);
  };

  const toggleOut = () => {
    clearTimeout(resetTimer);
    const timer = () =>
      setTimeout(() => {
        setHovered(false);
      }, 100);
    setTimer(timer);
  };

  useEffect(() => {
    if (isHovered) {
      let tooltipSize = tooltipRef.current.getBoundingClientRect();
      setPosition({
        marginTop: -(tooltipSize.height + 12),
        width: tooltipSize.width,
      });
    }
  }, [tooltipRef, isHovered]);

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={toggleOver}
      onMouseLeave={toggleOut}
    >
      {isHovered && (
        <StyledTooltip
          caption={caption}
          ref={tooltipRef}
          status={status}
          position={position}
          style={
            position === "left"
              ? {
                  marginTop: tooltipPosition.marginTop,
                  left: wrapperRef.current.offsetLeft,
                }
              : position === "right"
              ? {
                  marginTop: tooltipPosition.marginTop,
                  left:
                    wrapperRef.current.offsetLeft -
                    (tooltipPosition.width - wrapperRef.current.offsetWidth),
                }
              : {
                  marginTop: tooltipPosition.marginTop,
                  left: wrapperRef.current.offsetLeft,
                  marginLeft:
                    -(tooltipPosition.width - wrapperRef.current.offsetWidth) /
                    2,
                }
          }
        >
          {caption}
        </StyledTooltip>
      )}
      {children}
    </TooltipWrapper>
  );
};
