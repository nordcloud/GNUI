import cloneDeep from "lodash/cloneDeep";

import { Composition } from "./types";

export const preProcessTree = (
  tree: Composition[],
  separator = "->"
): Composition[] => {
  const treeClone = cloneDeep(tree);
  const mappedUids = getRelations(tree, separator);

  return attachRelations(treeClone, mappedUids, separator);
};

export const getChildrenUids = (composition: Composition): string[] => {
  const uids: string[] = [];

  if (!composition.children) {
    return [];
  }

  const recursivelyIterateChildren = (children: Composition[]) => {
    children.forEach((child) => {
      uids.push(child.uid);
      if (child.children) {
        recursivelyIterateChildren(child.children);
      }
    });
  };
  recursivelyIterateChildren(composition.children);

  return uids;
};

export const getParentsUids = (
  compositionUid: string,
  separator = "->"
): string[] => {
  const currentIdSpilt = compositionUid.split(separator);

  return currentIdSpilt.map((_, index) =>
    [...currentIdSpilt].splice(0, index + 1).join(separator)
  );
};

const getRelations = (tree: Composition[], separator = "->") => {
  const allRelations = [];

  let branch: string[] = [];
  let treeCopy = cloneDeep(tree);
  let isTreeEmpty = false;

  const firstChildOfItem = (childs: Composition[]) => {
    const firstChild = childs ? childs[0] : null;
    if (!firstChild) {
      return;
    }
    branch.push(firstChild.uid);
    if (firstChild.children && firstChild.children.length > 0) {
      firstChildOfItem(firstChild.children);
    } else {
      treeCopy = removeObject(treeCopy, firstChild.uid);
    }
  };

  while (!isTreeEmpty) {
    firstChildOfItem(treeCopy);
    allRelations.push([...new Set(branch)].join(separator));
    branch = [];
    isTreeEmpty = treeCopy.length === 0;
  }

  return allRelations;
};

const removeObject = (tree: Composition[], uid: string) => {
  const loop = (childsArray: Composition[] | undefined) => {
    if (childsArray) {
      for (const [index] of childsArray.entries()) {
        if (childsArray[index].uid === uid) {
          childsArray.splice(Number(index), 1);
        } else if (childsArray[index].children) {
          loop(childsArray[index].children);
        }
      }
    }
  };
  loop(tree);

  return tree;
};

const attachRelations = (
  tree: Composition[],
  relations: string[],
  separator = "->"
) => {
  const recursivelyIterateChildren = (children: Composition[]) => {
    children.forEach((child) => {
      relations.forEach((relation) => {
        const relationUids = relation.split(separator);
        const lastUid = relationUids.at(-1);

        if (lastUid === child.uid) {
          child.uid = relation;
        }
      });
      if (child.children) {
        recursivelyIterateChildren(child.children);
      }
    });
  };
  recursivelyIterateChildren(tree);

  return tree;
};
