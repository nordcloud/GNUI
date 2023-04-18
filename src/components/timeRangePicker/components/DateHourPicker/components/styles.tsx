import styled from "styled-components";
import theme from "../../../../../theme";

type CountBarProps = {
  height: number;
};

const BORDER_RADIUS = "2px";

export const CountTag = styled.div`
  background: ${theme.color.support.blue};
  color: ${theme.color.text.text04};
  padding: 0 ${theme.spacing.spacing01};
  border-radius: ${BORDER_RADIUS};
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
