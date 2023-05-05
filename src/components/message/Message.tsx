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

type MessageWrapperProps = Omit<MessageProps, "children" | "image">;

export const MessageWrapper = styled.div<MessageWrapperProps>`
  display: flex;
  align-items: flex-start;
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text01};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing03};
  line-height: 150%;
  border: 1px solid ${theme.color.border.border01};
  border-left-width: 4px;
  background: ${theme.color.background.ui03};

  ${({ status }) =>
    status === "success" &&
    css`
      border-color: ${theme.color.border.success};
      color: ${theme.color.text.success};
    `}
  ${({ status }) =>
    status === "danger" &&
    css`
      border-color: ${theme.color.border.error};
      color: ${theme.color.text.error};
    `}
  ${({ status }) =>
    status === "notification" &&
    css`
      border-color: ${theme.color.border.info};
      color: ${theme.color.text.info};
    `}
  ${({ status }) =>
    status === "warning" &&
    css`
      border-color: ${theme.color.border.warning};
      color: ${theme.color.text.warning};
    `}
  ${({ status }) =>
    status === "discovery" &&
    css`
      border-color: ${theme.color.border.discovery};
      color: ${theme.color.text.text01};
    `}
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
  border-radius: ${theme.radiusDefault};
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
