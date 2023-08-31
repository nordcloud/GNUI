import * as React from "react";
import { styled } from "styled-components";
import theme from "../../theme";

const Wrapper = styled("div")`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zindex.sticky};
  max-width: 100%;
  padding: ${theme.spacing.spacing02} ${theme.spacing.spacing04};
  display: flex;
  justify-content: center;
  background-color: ${theme.color.support.blueInverse};
  color: ${theme.color.text.text01};
`;

type Props = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"div"> &
    React.ComponentPropsWithoutRef<typeof Wrapper>
>;

export function StickyBar({ children, ...rest }: Props) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
