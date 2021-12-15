import * as React from "react";
import styled from "styled-components";
import { HeaderIcon as ToggleIcon, SVGIcon } from "..";
import theme from "../../theme";
import { Checkbox } from "../checkbox/Checkbox";
import { Flex } from "../container";
import {
  CheckboxTreeProps,
  Composition,
  RecursiveCheckboxesProps,
} from "./types";

const CheckboxWrap = styled.div`
  padding: ${theme.spacing.spacing01};
`;

const TreeItem = styled.div<{ isTopItem: boolean }>`
  border-top: ${(props) =>
    props.isTopItem ? theme.borders.disabled : "transparent"};
  border-bottom: ${theme.borders.disabled};
  padding: ${theme.spacing.spacing02};
`;

const Indentation = styled.div`
  padding-left: ${theme.spacing.spacing04};
`;

const MinusIcon = styled.div`
  transform: rotate(90deg);
`;

export function CheckboxTree({
  composition,
  preExpanded,
  preSelected,
  onChange,
  onExpand,
}: CheckboxTreeProps) {
  const [selected, setSelected] = React.useState<string[]>(preSelected ?? []);
  const [expanded, setExpanded] = React.useState<string[]>(preExpanded ?? []);
  const [indeterminate, setIndeterminate] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (onChange) {
      onChange(selected);
    }
  }, [selected, onChange]);

  React.useEffect(() => {
    if (onExpand) {
      onExpand(expanded);
    }
  }, [expanded, onExpand]);

  return (
    <>
      {composition.map((checkbox, index) => (
        <RecursiveCheckboxes
          parent={null}
          isFirstElement={index === 0}
          key={checkbox.uid}
          composition={checkbox}
          selected={selected}
          expanded={expanded}
          indeterminate={indeterminate}
          setSelected={setSelected}
          setExpanded={setExpanded}
          setIndeterminate={setIndeterminate}
        />
      ))}
    </>
  );
}

function RecursiveCheckboxes({
  composition,
  parent,
  isFirstElement,
  selected,
  expanded,
  indeterminate,
  setSelected,
  setExpanded,
  setIndeterminate,
}: RecursiveCheckboxesProps) {
  const handleSelect = (uid: string) => {
    const idsInAction = [uid];

    if (composition.children) {
      const recursive = (children: Composition[]) => {
        children.forEach((child) => {
          idsInAction.push(child.uid);
          if (child.children) {
            recursive(child.children);
          }
        });
      };
      recursive(composition.children);
    }

    if (selected.includes(uid)) {
      setSelected(selected.filter((id) => !idsInAction.includes(id)));
    } else {
      setSelected([...selected, ...idsInAction]);
    }
  };

  const handleExpand = (uid: string) => {
    if (expanded.includes(uid)) {
      setExpanded(expanded.filter((id) => id !== uid));
    } else {
      setExpanded([...expanded, uid]);
    }
  };

  const handleIndeterminate = () => {
    console.log(selected);
    if (composition.children) {
      const checkboxNotSelected = !selected.includes(composition.uid);
      const someChildrenChecked = composition.children.some(({ uid }) =>
        selected.includes(uid)
      );
      const notAllChildrenSelected = !composition.children.every(({ uid }) =>
        selected.includes(uid)
      );
      /* if (!notAllChildrenSelected) {
        setSelected([...selected, composition.uid]);
      } */
      if (
        checkboxNotSelected &&
        someChildrenChecked &&
        notAllChildrenSelected
      ) {
        return true;
      }
    }

    return false;
  };

  React.useEffect(() => {
    console.log(composition);
  }, []);

  /*  for handling parent check if childrens are checked
      but doesnt put parent uid into selected array
      parent &&
      parent.children &&
      parent.children.every(({ uid }) => selected.includes(uid)) */

  return (
    <div css={{ border: "1px solid grey" }}>
      <TreeItem isTopItem={!!isFirstElement}>
        <Flex>
          {composition.children ? (
            <ToggleIcon
              animate={expanded.includes(composition.uid)}
              onClick={() => handleExpand(composition.uid)}
            >
              <SVGIcon name="down" />
            </ToggleIcon>
          ) : (
            <ToggleIcon>
              <MinusIcon>
                <SVGIcon color="white" name="minus" />
              </MinusIcon>
            </ToggleIcon>
          )}
          <CheckboxWrap>
            <Checkbox
              isIndeterminate={!!handleIndeterminate()}
              checked={selected.includes(composition.uid)}
              id={composition.uid}
              labelText={composition.label}
              onChange={(e) => {
                handleSelect(e.target.id);
              }}
            />
          </CheckboxWrap>
        </Flex>
      </TreeItem>
      {expanded.includes(composition.uid) && (
        <Indentation>
          {composition.children &&
            composition.children.map((child) => {
              return (
                <RecursiveCheckboxes
                  key={child.uid}
                  parent={composition}
                  composition={child}
                  selected={selected}
                  expanded={expanded}
                  indeterminate={indeterminate}
                  setSelected={setSelected}
                  setExpanded={setExpanded}
                  setIndeterminate={setIndeterminate}
                />
              );
            })}
        </Indentation>
      )}
    </div>
  );
}
