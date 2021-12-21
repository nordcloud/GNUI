export type CheckboxTreeProps = {
  composition: Composition[];
  preSelected?: string[];
  preExpanded?: string[];
  onChange?: (selected: string[]) => void;
  onExpand?: (expanded: string[]) => void;
  preferredSeperator?: string;
};

export type Composition = {
  uid: string;
  label: string;
  children?: Composition[];
};
