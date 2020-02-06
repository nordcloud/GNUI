import styled from "styled-components";

interface ButtonProps {
  primary: Boolean;
}

export const Button = styled.button`
  font-size: 0.7rem;
  text-align: center;
  background: ${(props: ButtonProps) => (props.primary ? "blue" : "pink")};
  color: white;
  border-radius: 1rem;
  padding: 2rem;
`;
