import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { ToastContainer } from 'react-toastify';
import { Button } from "../button";
import { Text } from "../text";
import { Icon } from "../icon";
import { Heading } from "../heading";
import { darken } from "polished";

export interface ToastProps {
  name?:string;
  heading?: string;
  severity?: "danger" | "notification" | "warning" | "success";
  closeToast?: (e: React.MouseEvent) => void;
}

export interface MessageProps {
  heading?: string;
  message?: string;
  closeToast?: (e: React.MouseEvent) => void;
}

const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};

const StyledToastContainer = styled.div<ToastProps>`
  .Toastify {
    &__toast {
      position:relative;
      max-width:320px;
      font-weight: ${theme.fontWeights.medium};
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes.regular};
      text-align:left;
      border-radius:${theme.radiusDefault};
      padding: ${theme.spacing.spacing04};
      box-shadow: ${theme.shadow.shadow04};
      color: ${theme.colors.white};
      line-height: 1.5em;
      background-color:${theme.colors.notification};
  
      ${({ severity }) =>
        severity &&
        css`
          background-color: ${setColor(severity)}; 
      `}
  
      p {
        margin: ${theme.spacing.spacing03} 0 0;
        font-size: ${theme.fontSizes.small};
        font-weight: ${theme.fontWeights.regular};
      }
    }
    &__progress-bar {
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      height:0.25rem;
      background-color:${darken(0.1, theme.colors.notification)};
      border-bottom-left-radius: ${theme.radiusDefault};
      border-bottom-right-radius: ${theme.radiusDefault};

      ${({ severity }) =>
      severity &&
      css`
        background-color: ${darken(0.1, setColor(severity))}; 
      `}
    }
  }  
`;

const ToastTitle = styled.div<MessageProps>`
  display:flex;
  align-items: center;
  h5 {
    line-height: 1.5em;
    margin:0;
    font-weight: ${theme.fontWeights.medium};
  }
  button {
    padding: 0;
    background-color: transparent;
    border:none;
    margin-left: auto;
    &:focus {
      outline:none;
    }
  }
`;

export const Message: FunctionComponent<MessageProps> = ({ 
  heading,
  message,
  closeToast
}) => {
    return (
      <>
        <ToastTitle>
          <Heading level={5} color="white">{heading}</Heading>
          <Button onClick={closeToast}>
            <Icon width="1rem" height="1rem" image="CLOSE_WHITE" />
          </Button>
        </ToastTitle>
       {message && <Text>{message}</Text>}
      </>
    )
};

export const Toast: FunctionComponent<ToastProps> = ({ 
  name,
  severity
}) => {
    return (
      <StyledToastContainer id={name} severity={severity}>
        <ToastContainer closeButton={false} />
      </StyledToastContainer>
    )
};
