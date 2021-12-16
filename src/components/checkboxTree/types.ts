import { HeaderIconProps } from "../accordion";

// test
export type Comp = {
  uid: string;
  label: string;
  children?: Comp[];
  parent?: Comp;
};

//main

export type CheckboxTreeProps = {
  composition: Composition[];
  preSelected?: string[];
  preExpanded?: string[];
  onChange?: (selected: string[]) => void;
  onExpand?: (expanded: string[]) => void;
};

export type Composition = {
  uid: string;
  label: string;
  children?: Composition[];
};

export type RecursiveCheckboxesProps = {
  composition: Composition;
  parent: Composition | null;
  selected: string[];
  expanded: string[];
  indeterminate: string[];
  isFirstElement?: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
  setIndeterminate: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ExpandableCheckboxProps = HeaderIconProps;
