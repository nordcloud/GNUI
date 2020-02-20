import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { Container, Flex } from "../container";

interface DropdownProps {
  children: string;
  isOpen: boolean;
  name?: string;
  select?: string;
  onClick: (e: React.MouseEvent) => void;
}

const Wrapper = styled(Container)`
  width: max-content;
  position: relative;
`;

const DropdownButton = styled(Flex)`
  align-items: center;
  background-color: transparent;
  border: 0.0625rem solid ${theme.colors.light500};
  color: ${theme.colors.primary};
  padding: 0.5rem 0.75rem;
  font-weight: ${theme.fontWeights.regular};
  border-radius: 0.25rem;
  width: max-content;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover {
    background: ${theme.colors.light300};
    border: 0.0625rem solid ${theme.colors.light500};
    color: ${theme.colors.primary};
  }
  &:active {
    background: ${theme.colors.light400};
    border: 0.0625rem solid ${theme.colors.light500};
    color: ${theme.colors.primary};
  }
  &:disabled {
    background: transparent;
    border: 0.0625rem solid ${theme.colors.light500};
    color: ${theme.colors.light500};
    cursor: not-allowed;
    &:hover {
      background: transparent;
      color: ${theme.colors.light500};
    }
  }
`;

const StyledItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  &:hover {
    cursor: pointer;
    background: ${theme.colors.light300};
  }
`;

const DropdownMenu = styled(Flex)`
  align-items: center;
  text-align: center;
  display: ${isOpen ? "block" : "none"};
  position: absolute;
  border: 0.0625rem solid ${theme.colors.light500};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  border-radius: 0.25rem;
  background: ${theme.colors.light};
  z-index: 1;
`;

const DropdownItem = props => (
  <StyledItem
    onClick={e => {
      e.preventDefault();
      setIsSelect(props.name);
    }}
  >
    {props.name}
  </StyledItem>
);

export const Dropdown: React.FC<DropdownProps> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("");

  return (
    <Wrapper>
      <DropdownButton
        onClick={e => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <span style={{ marginRight: "0.5rem" }}>
          {props.name ? props.name : isSelect}
        </span>
        <Icon
          width="0.75rem"
          height="0.75rem"
          image={isOpen ? "ARROW_BOTTOM" : "ARROW_TOP"}
        />
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem name="something">something</DropdownItem>
        <DropdownItem name="something">something</DropdownItem>
        <DropdownItem name="something">something</DropdownItem>
      </DropdownMenu>
    </Wrapper>
  );
};
