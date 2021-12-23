export type CheckboxTreeProps = {
  composition: Composition[];
  selected?: string[];
  expanded?: string[];
  onChange?: (selected: string[]) => void;
  onExpand?: (expanded: string[]) => void;
  preferredSeparator?: string;
};

export type Composition = {
  uid: string;
  label: string;
  children?: Composition[];
};

export type ParentStateHandling = {
  isFirstElement?: boolean;
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
  expandedList: string[];
  setExpandedList: React.Dispatch<React.SetStateAction<string[]>>;
  indeterminate: string[];
  preferredSeparator: string;
};

export type RenderCompositionProps = Composition & ParentStateHandling;
