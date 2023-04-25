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

export const CountBarWrapper = styled.div`
  position: relative;
  height: 100%;
  width: ${theme.spacing.spacing02};
  background: rgba(200, 200, 216, 0.6);
  border-radius: ${BORDER_RADIUS};
`;

export const CountBar = styled.div<CountBarProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => `${height * 100}%`};
  background: ${theme.color.support.blue};
  border-radius: ${BORDER_RADIUS};
`;
