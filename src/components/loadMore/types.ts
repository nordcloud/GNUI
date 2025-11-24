import * as React from "react";
import { Button } from "../button";

export type LoadMoreProps = {
  /**
   * Current number of loaded/visible items
   */
  currentCount: number;

  /**
   * Total number of items available
   */
  total: number;

  /**
   * Function called when Show More button is clicked
   */
  onLoadMore: () => void;

  /**
   * Function called when Show All button is clicked.
   * If provided, a "Show All" button will be displayed.
   */
  onShowAll?: () => void;

  /**
   * Function called when Show Less button is clicked
   */
  onLoadLess?: () => void;

  /**
   * Whether the component is in a loading state
   */
  isLoading?: boolean;

  /**
   * Whether to hide the count indicator (1-X of Y)
   * When hidden, the "Show More" button will be centered
   * @default false
   */
  hideCount?: boolean;

  /**
   * Custom class name
   */
  className?: string;

  /**
   * The label for the "Show more" button.
   * @default "Show more"
   */
  showMoreLabel?: React.ReactNode;

  /**
   * The label for the "Show all" button.
   * @default "Show all"
   */
  showAllLabel?: React.ReactNode;

  /**
   * The label for the "Show less" button.
   * @default "Show less"
   */
  showLessLabel?: React.ReactNode;

  /**
   * Additional props for the 'Show More' button.
   * You can pass any prop that `Button` component accepts.
   * `onClick`, `initialState`, and `children` will be ignored.
   */
  showMoreButtonProps?: React.ComponentProps<typeof Button>;

  /**
   * Additional props for the 'Show All' button.
   * You can pass any prop that `Button` component accepts.
   * `onClick`, `initialState`, and `children` will be ignored.
   */
  showAllButtonProps?: React.ComponentProps<typeof Button>;

  /**
   * Additional props for the 'Show Less' button.
   * You can pass any prop that `Button` component accepts.
   * `onClick`, `initialState`, and `children` will be ignored.
   */
  showLessButtonProps?: React.ComponentProps<typeof Button>;
};

export type LoadMoreListProps = {
  /**
   * Optional initial items to display
   */
  initialItems?: string[];

  /**
   * Total number of items available
   */
  totalItems?: number;

  /**
   * Number of items to load per batch
   */
  batchSize?: number;

  /**
   * Optional loading delay in ms to simulate API calls
   */
  loadingDelay?: number;

  /**
   * If true, provides the `onShowAll` handler to `LoadMore`.
   * @default false
   */
  withShowAll?: boolean;
};
