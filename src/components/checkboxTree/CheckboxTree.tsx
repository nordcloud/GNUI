import * as React from "react";

import { RenderComposition } from "./components/RenderComposition";
import { TreeWrap } from "./styled";

import { CheckboxTreeProps } from "./types";
import { getParentsUids, preProcessTree } from "./utils";

export function CheckboxTree({
  composition,
  expanded,
  selected,
  onChange,
  onExpand,
  preferredSeparator = "->",
  disabled,
}: CheckboxTreeProps) {
  const processedTree = React.useMemo(
    () => preProcessTree(composition, preferredSeparator),
    [composition, preferredSeparator]
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

  const getParentsUidsMemo = React.useMemo(
    () => selected?.map((id) => getParentsUids(id, preferredSeparator)).flat(),
    [selected]
  );

  React.useEffect(() => {
    const allUids = getParentsUidsMemo ?? [];

    setIndeterminate(allUids);
  }, [selected]);

  return (
    <TreeWrap disabled={disabled}>
      {processedTree.map((comp, index) => (
        <RenderComposition
          selectedList={selected ?? []}
          expandedList={expanded ?? []}
          setSelectedList={setSelectedList}
          setExpandedList={setExpandedList}
          indeterminate={indeterminate}
          preferredSeparator={preferredSeparator}
          isFirstElement={index === 0}
          key={comp.uid}
          {...comp}
        />
      ))}
    </TreeWrap>
  );
}
