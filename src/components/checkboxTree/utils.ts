import { Comp } from "./types";

export const getChildrenUids = (comp: Comp): string[] => {
  const uids: string[] = [];
  if (comp.children) {
    const recursive = (children: Comp[]) => {
      children.forEach((child) => {
        uids.push(child.uid);
        if (child.children) {
          recursive(child.children);
        }
      });
    };
    recursive(comp.children);
    return uids;
  }

  return [];
};

export const isAllChildrenSelected = (
  currentSelected: string[],
  targetComposition: Comp
) => {
  const targetsChildren = targetComposition.children;

  return targetsChildren
    ? targetsChildren.every((child) => currentSelected.includes(child.uid))
    : true;
};
