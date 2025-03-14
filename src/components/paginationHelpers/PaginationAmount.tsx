import * as React from "react";

type Props = {
  from: number;
  size: number;
  count: number;
  firstPage?: number;
  style?: React.CSSProperties;
};

export function PaginationAmount({
  from,
  size,
  count,
  firstPage = 0,
  style,
}: Props) {
  const isFirstPageZero = firstPage === 0;

  const s = Number(size);
  const c = firstPage * s;
  const offset = isFirstPageZero ? 0 : s;

  const minCurrentPage = count < s ? 1 : from + 1 - offset;
  const maxCurrentPage = count < s ? count : Math.min(from + 1 + s) - c - 1;

  const min = minCurrentPage < 1 ? 1 : minCurrentPage;
  const max = maxCurrentPage < 1 ? size : maxCurrentPage;

  return (
    <div className="pagination-result" style={style}>
      {min} - {max > count ? count : max} of {count}
    </div>
  );
}
