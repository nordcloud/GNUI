import * as React from "react";
import { off, on } from "../utils/listeners";

const defaultEvents = ["mousedown", "touchstart"];

/* eslint-disable max-params */
export const useClickOutside = <E extends Event = Event>(
  ref: React.RefObject<HTMLElement | null>,
  active = true,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = React.useRef(onClickAway);
  React.useEffect(() => {
    savedCallback.current = onClickAway;
  });
  React.useEffect(() => {
    if (active) {
      const handler = (event: E) => {
        const { current: el } = ref;
        if (el instanceof Element && event.target instanceof Element) {
          !el.contains(event.target) && savedCallback.current(event);
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
