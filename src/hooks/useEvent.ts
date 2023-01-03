import * as React from "react";

type Listener = {
  addEventListener: (name: string, handler: (event?: Event) => void) => void;

  removeEventListener: (name: string, handler: (event?: Event) => void) => void;
};

type AddEventListener<T> = T extends Listener ? T["addEventListener"] : never;

type UseEventProps<T> = {
  name: Parameters<AddEventListener<T>>[0];
  handler?: Parameters<AddEventListener<T>>[1] | null;
  target?: T | Window | null;
};

export function useEvent<T extends Listener>({
  name,
  handler,
  target = window,
}: UseEventProps<T>) {
  React.useEffect(() => {
    if (!handler || !target) {
      return;
    }
    target.addEventListener(name, handler);

    return () => {
      target.removeEventListener(name, handler);
    };
  }, [name, handler, target]);
}
