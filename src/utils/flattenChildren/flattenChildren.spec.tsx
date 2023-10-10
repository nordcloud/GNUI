/* eslint-disable @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-namespace, jest/prefer-strict-equal, jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
// Code from https://github.com/gregberge/react-flatten-children
import * as React from "react";
import { flattenChildren } from "./flattenChildren";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      c: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      d: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      e: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      f: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

type Children = (
  | ReturnType<typeof React.Children.toArray>[number]
  | boolean
  | null
  | undefined
)[];

const getChildren = (
  element: React.ReactElement<{ children: React.ReactNode }>
): React.ReactNode => element.props.children;

const getTypes = (children: Children) =>
  React.Children.map(children, (child) => (child as React.ReactElement).type);

describe("flattenChildren", () => {
  it("should convert child to array", () => {
    const children = getChildren(<>Hello</>);
    expect(flattenChildren(children)).toEqual(React.Children.toArray(children));
  });

  it("should convert children to array", () => {
    const children = getChildren(
      <>
        <a />
        <b />
      </>
    );
    expect(flattenChildren(children)).toEqual(React.Children.toArray(children));
  });

  it("should flatten fragments", () => {
    const input = getChildren(
      <>
        <>
          <a />
          <b />
        </>
        <>
          <c />
        </>
        <d />
      </>
    );
    expect(getTypes(flattenChildren(input))).toEqual(["a", "b", "c", "d"]);
  });

  it("should flatten nested fragments", () => {
    const input = getChildren(
      <>
        <>
          <a />
          <b />
        </>
        <>
          <c />
          <>
            <d />
            <e />
            <>
              <f />
            </>
          </>
        </>
        <g />
      </>
    );
    expect(getTypes(flattenChildren(input))).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
    ]);
  });
});
