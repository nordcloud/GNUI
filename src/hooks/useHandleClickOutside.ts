import * as React from "react";

type Props = {
  handleClickOutside: (e: unknown) => void;
  clickOutsideToClose: boolean;
};

export function useHandleClickOutside({
  handleClickOutside,
  clickOutsideToClose,
}: Props) {
  React.useEffect(() => {
    if (!clickOutsideToClose) {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, clickOutsideToClose]);
}
