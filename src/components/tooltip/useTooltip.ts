import { useMemo, useRef, useState } from "react";
import {
  arrow,
  autoUpdate,
  flip,
  inline,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { DEFAULT_TOOLTIP_PADDING } from "./styles";

export type TooltipOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  status?: "danger" | "notification" | "success" | "warning";
  showArrow?: boolean;
  openDelay?: number;
  closeDelay?: number;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  offset?: number;
};

export function useTooltip({
  initialOpen = false,
  placement = "top",
  openDelay = 0,
  closeDelay = 0,
  offset: tooltipOffset = 10,
  showArrow = true,
  status,
  isOpen: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
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
      inline(),
      offset(tooltipOffset),
      flip({
        fallbackAxisSideDirection: "start",
        crossAxis: placement.includes("-"),
      }),
      shift({ padding: DEFAULT_TOOLTIP_PADDING }),
      showArrow && arrow({ element: arrowRef }),
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
    delay: {
      open: openDelay,
      close: closeDelay,
    },
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      isOpen,
      setOpen,
      arrowRef,
      status,
      showArrow,
      ...interactions,
      ...data,
    }),
    [isOpen, setOpen, status, showArrow, interactions, data]
  );
}
