import styled from "styled-components";
import theme from "../../../../../theme";
import { Tag } from "../../../../tag";

type CountBarProps = {
  height: number;
};

const BORDER_RADIUS = theme.radius.sm;

export const CountTag = styled(Tag)`
  margin: 0;
  border-radius: ${BORDER_RADIUS};
  height: 1.125rem;

  .tag-text {
    margin: 0 ${theme.spacing.spacing01};
  }
`;

// Opacity on pseudo element as workaround for rgab background color with var
// ref: https://stackoverflow.com/a/56951626
export const CountBarWrapper = styled.div`
  position: relative;
  height: 100%;
  width: ${theme.spacing.spacing02};
  border-radius: ${BORDER_RADIUS};

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: ${theme.color.support.grey};
    opacity: 0.6;
  }
`;

export const CountBar = styled.div<CountBarProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => `${height * 100}%`};
  background: ${theme.color.support.blue};
  border-radius: ${BORDER_RADIUS};
`;
