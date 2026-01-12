import * as React from "react";
export declare const useClickOutside: <E extends Event = Event>({ ref, active, onClickAway, events, }: {
    ref: React.RefObject<HTMLElement | null>;
    active: boolean;
    onClickAway: (event: E) => void;
    events?: string[] | undefined;
}) => void;
