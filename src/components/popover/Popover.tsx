import {
  cloneElement,
  ComponentProps,
  forwardRef,
  HTMLProps,
  isValidElement,
  ReactNode,
  Ref,
} from "react";
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import { When } from "react-if";
import { isForwardRef } from "react-is";
import theme from "../../theme";
import { PopoverContext, usePopoverContext } from "./context";
import { PopoverOptions, usePopover } from "./usePopover";

export const PopoverTrigger = forwardRef(
  ({ children, ...props }, propertyRef) => {
    const context = usePopoverContext();
    const childrenRef = hasRef(children) ? children.ref : null;
    const ref = useMergeRefs([
      context.refs.setReference,
      propertyRef,
      childrenRef,
    ]);

    if (isValidElement(children) && isForwardRef(children)) {
      return cloneElement(
        children,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- children.props is `any`. It's fine, because we don't know to need specific prop values
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.isOpen ? "open" : "closed",
        })
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        // The user can style the trigger based on the state
        data-state={context.isOpen ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  }
);

export const PopoverContent = forwardRef<
  HTMLDivElement,
  Omit<HTMLProps<HTMLElement>, "style"> & {
    $style?: HTMLProps<HTMLElement>["style"];
    $arrowProps?: Omit<ComponentProps<typeof FloatingArrow>, "context" | "ref">;
  }
>((props, propertyRef) => {
  const context = usePopoverContext();
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

  const { as: ignored, $style, $arrowProps, children, ...restOfProps } = props;

  return (
    <When condition={isMounted}>
      <FloatingPortal>
        <FloatingFocusManager context={context.context} modal={false}>
          <div
            {...restOfProps}
            ref={ref}
            style={{
              position: context.strategy,
              top: Math.round(context.y ?? 0),
              left: Math.round(context.x ?? 0),
              width: "max-content",
              visibility: context.x == null ? "hidden" : "visible",
              background: theme.color.background.ui05,
              ...transitionStyles,
              ...$style,
            }}
            {...context.getFloatingProps(props)}
          >
            {children}
            <When condition={context.showArrow}>
              <FloatingArrow
                ref={context.arrowRef}
                fill={theme.color.background.ui05}
                context={context.context}
                {...$arrowProps}
              />
            </When>
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    </When>
  );
});

function hasRef(value: unknown): value is { ref: Ref<unknown> } {
  // @ts-expect-error -- React types are lacking. Children prop is typed as ReactNode which doesn't allow refs, which is not true
  return value?.ref != null;
}

export function Popover({
  children,
  ...options
}: PopoverOptions & { children: ReactNode }) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover(options);
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
}

Popover.trigger = PopoverTrigger;
Popover.content = PopoverContent;
