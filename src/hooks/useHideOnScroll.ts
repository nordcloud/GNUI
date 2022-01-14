import * as React from "react";

type Props = {
  handleScroll: () => void;
};

export function useHideOnScroll({ handleScroll }: Props) {
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
}
