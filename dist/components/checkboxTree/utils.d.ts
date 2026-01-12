import { Composition } from "./types";
export declare const preProcessTree: (tree: Composition[], separator?: string) => Composition[];
export declare const getChildrenUids: (composition: Composition) => string[];
export declare const getParentsUids: (compositionUid: string, separator?: string) => string[];
