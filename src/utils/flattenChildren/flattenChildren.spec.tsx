/* eslint-disable @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-namespace, jest/prefer-strict-equal, @typescript-eslint/no-explicit-any, jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
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

const getChildren = (element: React.ReactElement<any>): React.ReactNode =>
  element.props.children;
const getTypes = (children: ReturnType<typeof React.Children.toArray>) =>
  React.Children.map(
    children,
    (child) => (child as React.ReactElement<any>).type
  );

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
