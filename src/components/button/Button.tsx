import React from "react";
import styled, {css} from "styled-components";
import theme from "../../theme"

interface ButtonProps {
    children: string;
    onClick?: () => void;
    color?: string;
    select?: boolean;
    outline?: boolean;
    className?: string;
}

const setColor = (color?: string) => (color ? color : theme.colors.primary);

const StyledButton = styled.button<ButtonProps>`  
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.light};
    padding: 0.5rem 1.75rem;
    border-radius: 0.25rem;
    margin-bottom: .5rem;
    font-weight: bold;
    font-size: 1rem;
    transition: all .1s linear;
    
    &:focus {
      outline: 0;
    }

    &:hover,
    .active {
        cursor: pointer;
        box-shadow: 0 1px 4px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.2);
    }
    
    ${({outline}) => outline && css`
        background-color: ${theme.colors.light};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      
        &:hover,
        &.active {
          cursor: pointer;
        }
    `} 
    
    ${({select, color}) => select && css`
      background-color: #e1e1e5;
      border: 1px solid #bababa;
      color: #777777;
      padding: 0.5rem 1.5rem;
      border-radius: 0.25rem;
      font-weight: regular;
      font-size: .75rem;
    
      &:hover {
        border: 1px solid ${setColor(color)};
      }
    
      &.active {
        cursor: pointer;
        color: ${theme.colors.light};
        background-color: ${setColor(color)};
        border: 1px solid ${setColor(color)};
      }
  `} 
`;

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton onClick={props.onClick} color={setColor(props.color)} {...props}>
            {props.children}
        </StyledButton>
    );
};
