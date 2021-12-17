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

export const getParentsUids = (comp: Comp): string[] => {
  const currentIdSpilt = comp.uid.split("->");

  return currentIdSpilt.map((_, index) =>
    [...currentIdSpilt].splice(0, index + 1).join("->")
  );
};

/* export const getParentUids = (currentUid: string, tree: Comp[]): string[] => {
  let uids: string[] = [];

  const recursive = (children?: Comp[]) => {
    if (children) {
      for (let i in children) {
        uids.push(children[i].uid);

        if (children[i].uid === currentUid) {
          break;
        } else {
          if (children[i].children) {
            recursive(children[i].children);
          } else {
            uids = [];
          }
        }
      }
    }
  };

  recursive(tree);

  return uids;
}; */
/* 
export const isAllChildrenSelected = (
  currentSelected: string[],
  targetComposition: Comp
) => {
  const targetsChildren = targetComposition.children;

  return targetsChildren
    ? targetsChildren.every((child) => currentSelected.includes(child.uid))
    : true;
}; */

/* export const mapTreeUids = (tree: Comp[]): Comp[] & { relation: string } => {
  const flatTree = [];

  for (let i in tree) {
      const branch = [];

      const 
    console.log(tree[i]);
  }

  return flatTree;
}; */
