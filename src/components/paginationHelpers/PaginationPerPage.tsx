import * as React from "react";

type Props = {
  size: number;
  set: (perPage: number) => void;
};

export function PerPage({ size, set }: Props) {
  return (
    <nav
      className="pagination-per-page"
      role="navigation"
      aria-label="pagination"
    >
      <div className="pagination-show">Show:</div>
      {[10, 20, 50].map((element) => (
        <button
          key={element}
          type="button"
          className={`pagination-link ${
            element.toString() === size.toString() ? `current` : ""
          }`}
          onClick={() => set(element)}
        >
          <span>{element}</span>
        </button>
      ))}
    </nav>
  );
}
