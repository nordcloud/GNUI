import { Composition } from "./types";

export const getChildrenUids = (composition: Composition): string[] => {
  const uids: string[] = [];
  if (composition.children) {
    const recursive = (children: Composition[]) => {
      children.forEach((child) => {
        uids.push(child.uid);
        if (child.children) {
          recursive(child.children);
        }
      });
    };
    recursive(composition.children);
    return uids;
  }

  return [];
};

export const getParentsUids = (composition: Composition): string[] => {
  const currentIdSpilt = composition.uid.split("->");

  return currentIdSpilt.map((_, index) =>
    [...currentIdSpilt].splice(0, index + 1).join("->")
  );
};
