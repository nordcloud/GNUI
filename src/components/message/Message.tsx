import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { SVGIcon } from "../svgicon";

export type MessageProps = {
  image?: string;
  status?: "success" | "notification" | "danger";
  borderColor?: string;
  background?: string;
  color?: string;
  children?: React.ReactNode;
};

export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  align-items: center;
  border-radius: ${theme.radiusDefault};
  color: ${theme.color.text.text04};
  font-size: ${theme.fontSizes.md};
  padding: ${theme.spacing.spacing03};
  line-height: 1.5rem;
  border:1px solid;

  ${({ status }) =>
    status === "success" &&
    css`
      background: ${theme.color.background.success};
    `}
  ${({ status }) =>
    status === "danger" &&
    css`
      background: ${theme.color.background.error};
    `}
  ${({ status }) =>
    status === "notification" &&
    css`
      background: ${theme.color.background.info};
    `}
  ${({ borderColor }) =>
    borderColor &&
    css`
      border: 1px solid ${borderColor};
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

export const IconBox = styled.div<MessageProps>`
  display: flex;
  align-items: center;
  border-radius: ${theme.radiusDefault};
  margin-right: ${theme.spacing.spacing03};
`;

export const Align = styled.div`
  margin-bottom: auto;
`;

export const Message: FunctionComponent<MessageProps> = ({
  children,
  image,
  ...props
}) => (
  <MessageWrapper {...props}>
    {image && (
      <Align>
        {image && (
          <IconBox {...props}>
            <SVGIcon name={image} />
          </IconBox>
        )}
      </Align>
    )}
    {children}
  </MessageWrapper>
);
