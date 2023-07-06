import * as React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SVGIcon, SVGIconProps } from "../svgicon";

export type MessageProps = React.HTMLProps<HTMLDivElement> & {
  image?: SVGIconProps["name"];
  status?: "danger" | "discovery" | "notification" | "success" | "warning";
  borderColor?: string;
  background?: string;
  color?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
};

const getBorderColor = (status?: MessageProps["status"]) => {
  switch (status) {
    case "notification":
      return theme.color.border.info;
    case "danger":
      return theme.color.border.error;
    default:
      return status ? theme.color.border[status] : theme.color.border.border01;
  }
};
const getTextColor = (status?: MessageProps["status"]) => {
  switch (status) {
    case "notification":
      return theme.color.text.info;
    case "danger":
      return theme.color.text.error;
    case "discovery":
      return theme.color.text.text01;
    default:
      return status ? theme.color.text[status] : theme.color.text.text01;
  }
};

type MessageWrapperProps = Omit<MessageProps, "children" | "image">;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  align-items: flex-start;
  border-radius: ${theme.radiusDefault};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing03};
  line-height: 150%;
  border: 1px solid;
  border-left-width: 4px;
  background: ${theme.color.background.ui03};
  border-color: ${({ status }) => getBorderColor(status)};
  color: ${({ status }) => getTextColor(status)};

  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
      border-left-width: 4px;
    `}
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.spacing03};

  svg {
    fill: currentColor;
  }
`;

export const Align = styled.div`
  margin-bottom: auto;
`;

export function Message({ children, image, ...props }: MessageProps) {
  return (
    <MessageWrapper {...props}>
      {image && (
        <Align>
          <IconBox>
            <SVGIcon name={image} />
          </IconBox>
        </Align>
      )}
      {children}
    </MessageWrapper>
  );
}
