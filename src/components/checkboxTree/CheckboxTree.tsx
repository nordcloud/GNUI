import * as React from "react";

import { HeaderIcon as ToggleIcon, SVGIcon } from "..";
import theme from "../../theme";
import { Checkbox } from "../checkbox/Checkbox";
import { Flex } from "../container";

import * as Styled from "./styled";
import { CheckboxTreeProps, Composition } from "./types";
import { getChildrenUids, getParentsUids, preProcessTree } from "./utils";

export function CheckboxTree({
  composition,
  preExpanded,
  preSelected,
  onChange,
  onExpand,
  preferredSeperator = "->",
}: CheckboxTreeProps) {
  const processedTree = preProcessTree(
    JSON.parse(JSON.stringify(composition)),
    preferredSeperator
  );

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

  React.useEffect(() => {
    const allUids = selected
      .map((id) => getParentsUids(id, preferredSeperator))
      .flat();

    setIndeterminate(allUids);
  }, [selected]);

  const RenderComposition = ({
    uid,
    label,
    children,
    isFirstElement,
  }: Composition & { isFirstElement?: boolean }): JSX.Element => {
    const handleSelect = (treeItem: Composition) => {
      if (!selected.includes(treeItem.uid)) {
        const uids = [treeItem.uid, ...getChildrenUids(treeItem)];
        setSelected([...selected, ...uids]);
      } else {
        const uids = [
          treeItem.uid,
          ...getChildrenUids(treeItem),
          ...getParentsUids(treeItem.uid, preferredSeperator),
        ];
        setSelected(selected.filter((id) => !uids.includes(id)));
      }
    };

    const handleExpand = (clickedUid: string) => {
      if (expanded.includes(clickedUid)) {
        setExpanded(expanded.filter((id) => id !== clickedUid));
      } else {
        setExpanded([...expanded, clickedUid]);
      }
    };

    React.useEffect(() => {
      if (
        children?.every((child) => selected.includes(child.uid)) &&
        !selected.includes(uid)
      ) {
        setSelected([...selected, uid]);
      }
    }, []);

    return (
      <Styled.Indentation>
        <Styled.TreeItem isTopItem={!!isFirstElement}>
          <Flex>
            <div css={{ width: theme.spacing.spacing04 }}>
              {children ? (
                <ToggleIcon
                  animate={expanded.includes(uid)}
                  onClick={() => handleExpand(uid)}
                >
                  <SVGIcon name="down" />
                </ToggleIcon>
              ) : (
                <ToggleIcon>
                  <Styled.MinusIcon>
                    <SVGIcon size="sm" name="minus" />
                  </Styled.MinusIcon>
                </ToggleIcon>
              )}
            </div>
            <Styled.CheckboxWrap>
              <Checkbox
                isIndeterminate={indeterminate.includes(uid)}
                checked={selected.includes(uid)}
                id={uid}
                labelText={label}
                onChange={() => handleSelect({ uid, label, children })}
              />
            </Styled.CheckboxWrap>
          </Flex>
        </Styled.TreeItem>
        {expanded.includes(uid) &&
          children &&
          children.map((child) => (
            <RenderComposition key={child.uid} {...child} />
          ))}
      </Styled.Indentation>
    );
  };

  return (
    <>
      {processedTree.map((comp, index) => (
        <RenderComposition
          isFirstElement={index === 0}
          key={comp.uid}
          {...comp}
        />
      ))}
    </>
  );
}
