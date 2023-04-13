import {
  cloneElement,
  ComponentProps,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
} from "react";
import {
  useMergeRefs,
  FloatingPortal,
  useTransitionStyles,
  FloatingArrow,
} from "@floating-ui/react";
import { When } from "react-if";
import { isForwardRef } from "react-is";
import { TooltipContext, useTooltipContext } from "./context";
import { getArrowFillColor, StyledTooltip } from "./styles";
import { TooltipOptions, useTooltip } from "./useTooltip";

const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
  ({ children, ...props }, propertyRef) => {
    const context = useTooltipContext();
    // @ts-expect-error -- React types are lacking. Children prop is typed as ReactNode which doesn't allow refs, which is not true
    const childrenRef = children?.ref ?? null;
    const ref = useMergeRefs([
      context.refs.setReference,
      propertyRef,
      childrenRef,
    ]);

    if (isValidElement(children) && isForwardRef(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.isOpen ? "open" : "closed",
        })
      );
    }

    return (
      <span
        ref={ref}
        // The user can style the trigger based on the state
        data-state={context.isOpen ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </span>
    );
  }
);

const TooltipContent = forwardRef<
  HTMLDivElement,
  Omit<HTMLProps<HTMLElement>, "style"> & {
    $style?: HTMLProps<HTMLElement>["style"];
    $arrowProps?: Omit<ComponentProps<typeof FloatingArrow>, "context" | "ref">;
  }
>((props, propertyRef) => {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propertyRef]);

  const { isMounted, styles: transitionStyles } = useTransitionStyles(
    context.context,
    {
      duration: { open: 300, close: 150 },
      initial: {
        opacity: 0,
        transform: "scale(0.95)",
      },
    }
  );

  if ("style" in props) {
    console.warn("Use $style instead of style in this TooltipContent.");
  }

  const { as: _ignored, $style, $arrowProps, children, ...restOfProps } = props;

  return (
    <When condition={isMounted}>
      <FloatingPortal>
        <StyledTooltip
          {...restOfProps}
          ref={ref}
          strategy={context.strategy}
          status={context.status}
          style={{
            position: context.strategy,
            top: Math.round(context.y ?? 0),
            left: Math.round(context.x ?? 0),
            visibility: context.x == null ? "hidden" : "visible",
            ...transitionStyles,
            ...$style,
          }}
          {...context.getFloatingProps(props)}
        >
          {children}
          <When condition={context.showArrow}>
            <FloatingArrow
              ref={context.arrowRef}
              fill={getArrowFillColor(context.status)}
              context={context.context}
              {...$arrowProps}
            />
          </When>
        </StyledTooltip>
      </FloatingPortal>
    </When>
  );
});

export function Tooltip({
  children,
  ...options
}: TooltipOptions & { children: ReactNode }) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

Tooltip.trigger = TooltipTrigger;
Tooltip.content = TooltipContent;
