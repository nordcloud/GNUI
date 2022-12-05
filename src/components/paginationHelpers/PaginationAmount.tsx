import * as React from "react";

type Props = {
  from: number;
  size: number;
  count: number;
  firstPage?: number;
};

export function PaginationAmount({ from, size, count, firstPage = 0 }: Props) {
  const isFirstPageZero = firstPage === 0;

  const s = Number(size);
  const c = firstPage * s;

  const maxCurrentPage =
      count < s ? count : Math.min(from + 1 + s) - c - 1;
  const minCurrentPage = count < s ? 1 : from + 1 - (isFirstPageZero ? 0 : s);
  return (
    <div className="pagination-result">
      {minCurrentPage} -{maxCurrentPage > count ? count : maxCurrentPage} of{" "}
      {count}
    </div>
  );
}
