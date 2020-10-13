import React, { useEffect, forwardRef } from "react";
import { Checkbox } from "./Checkbox";

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, id, ...rest }: any, ref: any) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (
      <Checkbox
        id={id}
        type="checkbox"
        withoutLabel
        isIndeterminate={indeterminate}
        ref={resolvedRef}
        {...rest}
      />
    );
  }
);

export { IndeterminateCheckbox };
