import { css } from "styled-components";
import { breakpoints } from "./config";

type BreakpointKey = keyof typeof breakpoints;
type MediaFunction = (
  ...argument: Parameters<typeof css>
) => ReturnType<typeof css>;

export const bp = (Object.keys(breakpoints) as BreakpointKey[]).reduce(
  (acc, key) => {
    acc[key] = (...args) => css`
      @media (min-width: ${breakpoints[key]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {} as Record<BreakpointKey, MediaFunction>
);
