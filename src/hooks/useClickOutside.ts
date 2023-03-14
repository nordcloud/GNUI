import * as React from "react";
import { off, on } from "../utils/listeners";

const defaultEvents = ["mousedown", "touchstart"];

export const useClickOutside = <E extends Event = Event>({
  ref,
  active = true,
  onClickAway,
  events = defaultEvents,
}: {
  ref: React.RefObject<HTMLElement | null>;
  active: boolean;
  onClickAway: (event: E) => void;
  events?: string[];
}) => {
  const savedCallback = React.useRef(onClickAway);
  React.useEffect(() => {
    savedCallback.current = onClickAway;
  });
  React.useEffect(() => {
    if (active) {
      const handler = (event: E) => {
        const { current: element } = ref;
        if (element instanceof Element && event.target instanceof Element) {
          !element.contains(event.target) && savedCallback.current(event);
        }
      };

      // @ts-expect-error hard to properly type event listeners
      events.forEach((eventName) => on(document, eventName, handler));

      return () => {
        // @ts-expect-error hard to properly type event listeners
        events.forEach((eventName) => off(document, eventName, handler));
      };
    }
  }, [events, ref, active]);
};
