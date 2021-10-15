import * as React from "react";
import { Checkbox } from "./Checkbox";

type Props = React.ComponentProps<typeof Checkbox> & {
  indeterminate?: boolean;
};

export const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ indeterminate = false, id, ...rest }, ref) => {
    const defaultRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef = ref ?? defaultRef;

    React.useEffect(() => {
      if ("current" in resolvedRef && resolvedRef.current != null) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <Checkbox
        id={id}
        withoutLabel
        isIndeterminate={indeterminate}
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);
