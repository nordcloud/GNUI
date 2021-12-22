import React from "react";

import theme from "../../../theme";
import { HeaderIcon as ToggleIcon } from "../../accordion";
import { Checkbox } from "../../checkbox";
import { Flex } from "../../container";
import { SVGIcon } from "../../svgicon";

import { Composition, RenderCompositionProps } from "../types";
import { getChildrenUids, getParentsUids } from "../utils";

import * as Styled from "./../styled";

export function RenderComposition({
  uid,
  label,
  children,
  isFirstElement,
  selectedList,
  setSelectedList,
  expandedList,
  setExpandedList,
  indeterminate,
  preferredSeparator,
}: RenderCompositionProps): JSX.Element {
  const handleSelect = (treeItem: Composition) => {
    if (!selectedList.includes(treeItem.uid)) {
      const uids = [treeItem.uid, ...getChildrenUids(treeItem)];
      setSelectedList([...selectedList, ...uids]);
    } else {
      const uids = [
        treeItem.uid,
        ...getChildrenUids(treeItem),
        ...getParentsUids(treeItem.uid, preferredSeparator),
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
      children &&
      children.length > 0 &&
      children.every((child) => selectedList.includes(child.uid)) &&
      !selectedList.includes(uid)
    ) {
      setSelectedList([...selectedList, uid]);
    }
  });

  return (
    <Styled.Indentation>
      <Styled.TreeItem isTopItem={!!isFirstElement}>
        <Flex>
          <div css={{ width: theme.spacing.spacing04 }}>
            {children && children.length > 0 ? (
              <ToggleIcon
                animate={expandedList.includes(uid)}
                onClick={() => handleExpand(uid)}
                cursor="pointer"
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
        children.length > 0 &&
        children.map((child) => (
          <RenderComposition
            setSelectedList={setSelectedList}
            setExpandedList={setExpandedList}
            selectedList={selectedList}
            expandedList={expandedList}
            preferredSeparator={preferredSeparator}
            indeterminate={indeterminate}
            key={child.uid}
            {...child}
          />
        ))}
    </Styled.Indentation>
  );
}
