// Based on https://github.com/gregberge/react-flatten-children
import * as React from "react";

type ReactChildArray = ReturnType<typeof React.Children.toArray>;

export function flattenChildren(
  children: React.ReactNode
): (ReactChildArray[number] | boolean | null | undefined)[] {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.flatMap((child) => {
    if (isReactFragment(child)) {
      return flattenChildren(child.props.children);
    }

    return child;
  });
}

function isReactFragment(
  element: ReactChildArray[number]
): element is React.ReactElement<React.ComponentProps<typeof React.Fragment>> {
  if (isPrimitiveElement(element) || !("type" in element)) {
    return false;
  }

  return element.type === React.Fragment;
}

function isPrimitiveElement(
  element: ReactChildArray[number]
): element is number | string {
  return (
    typeof element === "string" ||
    element instanceof String ||
    typeof element === "number"
  );
}
