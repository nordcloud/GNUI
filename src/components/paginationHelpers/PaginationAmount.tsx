import * as React from "react";

type Props = {
  from: number;
  size: number;
  count: number;
};

export function PaginationAmount({ from, size, count }: Props) {
  const s = Number(size);
  const maxCurrentPage = count < s ? count : Math.min(from + s);
  const minCurrentPage = count < s ? "1" : from + 1;
  return (
    <div className="pagination-result">
      {minCurrentPage} -{maxCurrentPage > count ? count : maxCurrentPage} of{" "}
      {count}
    </div>
  );
}
