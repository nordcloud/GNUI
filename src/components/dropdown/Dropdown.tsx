import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Icon } from "../icon";
import { Container, Flex } from "../container";

interface DropdownProps {
  children: string;
  isOpen: boolean;
  name?: string;
  items?: any;
  onClick: () => void;
}

const DropdownWrapper = styled(Container)`
  width: max-content;
  position: relative;
`;

const DropdownButton = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 0.0625rem solid ${theme.colors.light500};
  color: ${theme.colors.primary};
  padding: 0.5rem 0.75rem;
  font-weight: ${theme.fontWeights.regular};
  border-radius: 0.25rem;
  min-width: 7rem;
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

const DropdownMenu = styled(Container)`
  text-align: center;
  position: absolute;
  border: 0.0625rem solid ${theme.colors.light500};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.regular};
  border-radius: 0.25rem;
  background: ${theme.colors.light};
  z-index: 1;
`;

const DropdownItem = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0;
  list-style: none;
  &:hover {
    cursor: pointer;
    background: ${theme.colors.light300};
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <span style={{ marginRight: "0.5rem" }}>{value ? value : name}</span>
        <Icon
          width="0.75rem"
          height="0.75rem"
          image={isOpen ? "ARROW_BOTTOM" : "ARROW_TOP"}
        />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu
          onClick={() => setIsOpen(!isOpen)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items &&
            items.map((item: string) => (
              <DropdownItem key={item} onClick={() => setValue(item)}>
                {item}
              </DropdownItem>
            ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
