import * as React from "react";
type ReactChildArray = ReturnType<typeof React.Children.toArray>;
export declare function flattenChildren(children: React.ReactNode): (ReactChildArray[number] | boolean | null | undefined)[];
export {};
