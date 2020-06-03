import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";

type MessageProps = {
  image?: string;
  status?: "success" | "notification" | "danger";
  children?: React.ReactNode;
};

export const MessageWrapper = styled.div<MessageProps>`
  display:flex;
  align-items:center;
  border-radius: ${theme.radiusDefault};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.regular};
  padding: ${theme.spacing.spacing03};
  line-height:1.5rem;
  
  ${({ status }) =>
  status === "success" &&
  css`
    background: ${theme.colors.success};
  `}
  ${({ status }) =>
  status === "danger" &&
  css`
    background: ${theme.colors.danger};
  `}
  ${({ status }) =>
  status === "notification" &&
  css`
    background: ${theme.colors.notification};
  `}
`;

export const IconBox = styled.div<MessageProps>`
  display:flex;
  align-items:center;
  border-radius: ${theme.radiusDefault};
  padding: ${theme.spacing.spacing02};
  margin-right: ${theme.spacing.spacing03};

  ${({ status }) =>
  status === "success" &&
  css`
    background: rgba(30, 132, 73, 0.5);
  `}
  ${({ status }) =>
  status === "danger" &&
  css`
    background: rgba(176, 58, 46, 0.5);
  `}
  ${({ status }) =>
  status === "notification" &&
  css`
    background: rgba(40, 116, 166, 0.5);
  `}
`;

export const Align = styled.div`
  margin-bottom:auto;
`;

export const Message: FunctionComponent<MessageProps> = ({
  children,
  image,
  status
}) => 
    <MessageWrapper status={status}>
      <Align>
        <IconBox status={status}>
          <Icon image={image} width="1.5rem" height="1.5rem"/>
        </IconBox>
      </Align>
      {children}
    </MessageWrapper>;
