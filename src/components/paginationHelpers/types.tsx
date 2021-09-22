export type IPaginationBoxProps = {
  size: number;
  from: number;
  count: number;
  setSize(size: number): any;
  setPage(page: number): any;
  small?: boolean;
  sidebar?: boolean;
};

export type IPaginationProps = {
  set(start: number): void;
  current?: number;
  count: number;
  size: number;
  from: number;
};
