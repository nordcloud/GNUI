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
  expanded,
  selected,
  onChange,
  onExpand,
  preferredSeperator = "->",
}: CheckboxTreeProps) {
  const processedTree = React.useMemo(
    () =>
      preProcessTree(
        JSON.parse(JSON.stringify(composition)),
        preferredSeperator
      ),
    [composition, preferredSeperator]
  );

  const [selectedList, setSelectedList] = React.useState<string[]>(
    selected ?? []
  );
  const [expandedList, setExpandedList] = React.useState<string[]>(
    expanded ?? []
  );
  const [indeterminate, setIndeterminate] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (onChange) {
      onChange(selectedList);
    }
  }, [selectedList, onChange]);

  React.useEffect(() => {
    if (onExpand) {
      onExpand(expandedList);
    }
  }, [expandedList, onExpand]);

  React.useEffect(() => {
    const allUids = selectedList
      .map((id) => getParentsUids(id, preferredSeperator))
      .flat();

    setIndeterminate(allUids);
  }, [selectedList]);

  const RenderComposition = ({
    uid,
    label,
    children,
    isFirstElement,
  }: Composition & { isFirstElement?: boolean }): JSX.Element => {
    const handleSelect = (treeItem: Composition) => {
      if (!selectedList.includes(treeItem.uid)) {
        const uids = [treeItem.uid, ...getChildrenUids(treeItem)];
        setSelectedList([...selectedList, ...uids]);
      } else {
        const uids = [
          treeItem.uid,
          ...getChildrenUids(treeItem),
          ...getParentsUids(treeItem.uid, preferredSeperator),
        ];
        setSelectedList(selectedList.filter((id) => !uids.includes(id)));
      }
    };

    const handleExpand = (clickedUid: string) => {
      if (expandedList.includes(clickedUid)) {
        setExpandedList(expandedList.filter((id) => id !== clickedUid));
      } else {
        setExpandedList([...expandedList, clickedUid]);
      }
    };

    React.useEffect(() => {
      if (
        children?.every((child) => selectedList.includes(child.uid)) &&
        !selectedList.includes(uid)
      ) {
        setSelectedList([...selectedList, uid]);
      }
    }, []);

    return (
      <Styled.Indentation>
        <Styled.TreeItem isTopItem={!!isFirstElement}>
          <Flex>
            <div css={{ width: theme.spacing.spacing04 }}>
              {children ? (
                <ToggleIcon
                  animate={expandedList.includes(uid)}
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
                checked={selectedList.includes(uid)}
                id={uid}
                labelText={label}
                onChange={() => handleSelect({ uid, label, children })}
              />
            </Styled.CheckboxWrap>
          </Flex>
        </Styled.TreeItem>
        {expandedList.includes(uid) &&
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
