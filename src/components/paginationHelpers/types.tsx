export type IPaginationBoxProps = {
  size: number;
  from: number;
  count: number;
  setSize: (size: number) => void;
  setPage: (page: number) => void;
  small?: boolean;
  sidebar?: boolean;
};

export type IPaginationProps = {
  set(start: number): void;
  current: number;
  count: number;
  size: number;
};

export type IExtendedPaginationProps = { from: number } & Omit<
  IPaginationProps,
  "current"
>;
