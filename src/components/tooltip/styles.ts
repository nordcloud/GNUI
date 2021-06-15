import styled, { css } from "styled-components";
import theme from "../../theme";
import { setColor } from "../../utils/setcolor";
import { Props as TooltipProps } from "./Tooltip";

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

export const TooltipWrapper = styled.div`
  display: inline-block;
`;

type StyledTooltipProps = Pick<
  TooltipProps,
  "position" | "status" | "minWidth"
>;

export const StyledTooltip = styled.div<StyledTooltipProps>`
  position: absolute;
  min-width: ${({ minWidth }) => minWidth};
  max-width: 16rem;
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: ${theme.color.background.ui05};
  color: ${theme.color.text.text04};
  border-radius: ${theme.radius.md};
  z-index: ${theme.zindex.sticky};
  opacity: 0;
  animation: 0.2s ease-in-out both fadeInUp;

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
    border-top-color: ${theme.color.background.ui05};
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
`;
