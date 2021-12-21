import { Composition } from "./types";

export const preProcessTree = (
  tree: Composition[],
  preferredSeperator: string
): Composition[] => {
  const treeClone = JSON.parse(JSON.stringify(tree));
  const mappedUids = getRelations(tree, preferredSeperator);

  return attachRelations(treeClone, mappedUids, preferredSeperator);
};

export const getChildrenUids = (composition: Composition): string[] => {
  const uids: string[] = [];

  if (!composition.children) {
    return [];
  }

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
};

export const getParentsUids = (
  compositionUid: string,
  preferredSeperator: string
): string[] => {
  const currentIdSpilt = compositionUid.split(preferredSeperator);

  return currentIdSpilt.map((_, index) =>
    [...currentIdSpilt].splice(0, index + 1).join(preferredSeperator)
  );
};

export const getRelations = (
  tree: Composition[],
  preferredSeperator = "->"
) => {
  const allRelations = [];

  let branch: string[] = [];
  let treeCopy = [...tree];
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
    allRelations.push([...new Set(branch)].join(preferredSeperator));
    branch = [];
    isTreeEmpty = treeCopy.length === 0;
  }

  return allRelations;
};

const removeObject = (tree: Composition[], uid: string) => {
  const loop = (childsArray: Composition[] | undefined) => {
    if (childsArray) {
      for (let index in childsArray) {
        if (childsArray[index].uid === uid) {
          childsArray.splice(Number(index), 1);
        } else {
          if (childsArray[index].children) {
            loop(childsArray[index].children);
          }
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
  preferredSeperator = "->"
) => {
  const recursive = (children: Composition[]) => {
    children.forEach((child) => {
      relations.forEach((relation) => {
        const relationUids = relation.split(preferredSeperator);
        const lastUid = relationUids[relationUids.length - 1];

        if (lastUid === child.uid) {
          child.uid = relation;
        }
      });
      if (child.children) {
        recursive(child.children);
      }
    });
  };
  recursive(tree);

  return tree;
};
