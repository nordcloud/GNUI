import { Strategy } from "@floating-ui/react";
import styled from "styled-components";
import theme from "../../theme";
import { setColor } from "../../utils/setcolor";

export const DEFAULT_TOOLTIP_PADDING = 5;

type StyledTooltipProps = {
  strategy: Strategy;
  status?: "danger" | "notification" | "success" | "warning";
};

// Don't forward style prop, as we need to add positioning data and passing `style` prop would overwrite it
export const StyledTooltip = styled.div<StyledTooltipProps>`
  --backgroundColor: ${({ status }) =>
    status ? setColor(status) : theme.color.background.ui05};

  box-sizing: border-box;
  width: max-content;
  /* We want to ensure that padding from 2 sides is accounted for, hence multiplication */
  max-width: min(
    calc(100vw - ${DEFAULT_TOOLTIP_PADDING * 2}px - var(--scrollbar-width)),
    16rem
  );
  font-size: ${theme.fontSizes.sm};
  line-height: 1rem;
  padding: ${theme.spacing.spacing02};
  background-color: var(--backgroundColor);
  border-top-color: var(--backgroundColor);
  color: ${theme.color.text.text04};
  border-radius: ${theme.radius.md};
  z-index: ${theme.zindex.sticky};
`;

export const getArrowFillColor = (
  status?: "danger" | "notification" | "success" | "warning"
) => (status ? setColor(status) : theme.color.background.ui05);
