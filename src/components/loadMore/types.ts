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
}

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
}
