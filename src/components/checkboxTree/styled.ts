import styled from "styled-components";
import theme from "../../theme";

export const CheckboxWrap = styled.div`
  padding: ${theme.spacing.spacing01};
`;

export const TreeItem = styled.div<{ isTopItem: boolean }>`
  border-top: ${(props) =>
    props.isTopItem ? theme.borders.disabled : "transparent"};
  border-bottom: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02};
`;

export const Indentation = styled.div`
  padding-left: ${theme.spacing.spacing04};
`;

export const MinusIcon = styled.div`
  transform: rotate(90deg);
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
