import React from "react";
import styled from "styled-components";
import { SpaceProps } from "styled-system";
import { Button } from "../button";
import { Spinner } from "../spinner";
import { StyledInputProps, StyledInputGroupProps } from "./types";
import { InputGroup, StyledInput } from "./styles";

const ButtonWrapper = styled.div`
  margin: -0.25rem -0.25rem -0.25rem 0;
`;

type Props = StyledInputGroupProps &
  StyledInputProps &
  SpaceProps & {
    onSearch?: () => void;
  };

export const InputSearch: React.FC<Props> = React.forwardRef(
  (
    {
      noBorder,
      type,
      popup,
      status,
      loading,
      onClick,
      onSearch,
      small,
      showClearButton,
      onClear = () => undefined,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        {loading && <Spinner />}
        <StyledInput
          type={type}
          onClick={onClick}
          popup={popup}
          small={small}
          ref={ref}
          {...props}
        />
        <ButtonWrapper>
          <Button size="md" severity="low" icon="search" onClick={onSearch}>
            Search
          </Button>
        </ButtonWrapper>
      </InputGroup>
    );
  }
);
