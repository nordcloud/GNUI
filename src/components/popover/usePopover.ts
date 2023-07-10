import { useMemo, useRef, useState } from "react";
import {
  arrow,
  autoUpdate,
  flip,
  limitShift,
  offset,
  Placement,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";

export type PopoverOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  showArrow?: boolean;
  triggerOn?: "click" | "hover";
  openDelay?: number;
  closeDelay?: number;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  offset?: number;
};

export function usePopover({
  initialOpen = false,
  placement = "top",
  triggerOn = "click",
  openDelay = 0,
  closeDelay = 0,
  offset: popoverOffset = 10,
  showArrow = true,
  isOpen: controlledOpen,
  onOpenChange: setControlledOpen,
}: PopoverOptions = {}) {
  const [isUncontrolledOpen, setIsUncontrolledOpen] = useState(initialOpen);
  const arrowRef = useRef(null);

  const isOpen = controlledOpen ?? isUncontrolledOpen;
  const setOpen = setControlledOpen ?? setIsUncontrolledOpen;

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(popoverOffset),
      flip({
        fallbackAxisSideDirection: "end",
        crossAxis: false,
      }),
      shift({
        limiter: limitShift({ offset: popoverOffset * 1.5 }),
      }),
      showArrow &&
        arrow({
          element: arrowRef,
          padding: 5,
        }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null && triggerOn === "click",
  });
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null && triggerOn === "hover",
    delay: {
      open: openDelay,
      close: closeDelay,
    },
    handleClose: safePolygon(),
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, hover, dismiss, role]);

  const transition = useTransitionStyles(context, {
    duration: {
      open: 400,
      close: 75,
    },
    initial: ({ side }) => ({
      opacity: 0,
      transform: {
        top: "translateY(-0.5rem)",
        right: "translateX(0.5rem)",
        bottom: "translateY(0.5rem)",
        left: "translateX(-0.5rem)",
      }[side],
    }),
    close: () => ({
      opacity: 0,
      transform: "scale(0.97)",
    }),
  });

  return useMemo(
    () => ({
      isOpen,
      setOpen,
      ...interactions,
      ...data,
      ...transition,
      showArrow,
      arrowRef,
    }),
    [isOpen, setOpen, interactions, data, transition, showArrow]
  );
}
