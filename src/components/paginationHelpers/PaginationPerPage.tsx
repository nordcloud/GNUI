import * as React from "react";

type Props = {
  size: number;
  set(perPage: number): void;
};

export function PerPage({ size, set }: Props) {
  return (
    <nav
      className="pagination-per-page"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-show">Show:</div>
      {[10, 20, 50].map((el) => (
        <button
          key={el}
          onClick={() => set(el)}
          className={`pagination-link ${
            el.toString() === size.toString() && `current`
          }`}
        >
          <span>{el}</span>
        </button>
      ))}
    </nav>
  );
}
