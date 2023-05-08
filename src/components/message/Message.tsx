import * as React from "react";
import styled, { css } from "styled-components";
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
  border-radius: ${({ theme }) => theme.radiusDefault};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: ${({ theme }) => theme.spacing.spacing03};
  line-height: 150%;
  border: 1px solid;
  border-left-width: 4px;
  background: ${({ theme }) => theme.color.background.ui03};

  --borderColor: ${({ status, theme }) =>
    status ? theme.color.border[status] : theme.color.border.border01};
  --textColor: ${({ status, theme }) =>
    status ? theme.color.text[status] : theme.color.text.text01};

  border-color: var(--borderColor);
  color: var(--textColor);

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
