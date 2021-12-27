import styled from "styled-components";
import theme from "../../theme";

export const TreeWrap = styled.div<{ disabled?: boolean }>`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const CheckboxWrap = styled.div`
  padding: ${theme.spacing.spacing02};
`;

export const TreeItem = styled.div<{ isTopItem: boolean }>`
  border-top: ${(props) =>
    props.isTopItem ? theme.borders.disabled : "transparent"};
  border-bottom: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02};
`;

export const Indentation = styled.div<{ isRootElement?: boolean }>`
  padding-left: ${(props) =>
    props.isRootElement ? theme.spacing.spacing00 : theme.spacing.spacing07};`;

export const MinusIcon = styled.div`
  transform: rotate(90deg);
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
