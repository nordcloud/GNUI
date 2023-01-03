export type IPaginationBoxProps = {
  size: number;
  from: number;
  count: number;
  setSize: (size: number) => void;
  setPage: (page: number) => void;
  small?: boolean;
  sidebar?: boolean;
  firstPage?: number;
};

export type IPaginationProps = {
  set: (start: number) => void;
  current: number;
  count: number;
  size: number;
  firstPage?: number;
};

export type IExtendedPaginationProps = Omit<IPaginationProps, "current"> & {
  from: number;
};
