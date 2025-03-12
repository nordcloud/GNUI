import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { LoadMore } from "./LoadMore";
import { LoadMoreListProps } from "./types";

const Container = styled.div`
  font-family: ${theme.fonts.body};
  padding: ${theme.spacing.spacing04};
  background-color: ${theme.color.background.ui01};
  border-radius: ${theme.radius.md};
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.spacing03} 0;
`;

const ListItem = styled.li`
  padding: ${theme.spacing.spacing03};
  background-color: ${theme.color.background.ui02};
  border: 1px solid ${theme.color.border.border01};
  margin-bottom: ${theme.spacing.spacing02};
  border-radius: ${theme.radius.md};
  color: ${theme.color.text.text01};

  &:last-child {
    margin-bottom: 0;
  }
`;

/**
 * Example component showing how to use LoadMore with a list
 */
export function LoadMoreList({
  initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
  totalItems = 15,
  batchSize = 5,
  loadingDelay = 1000,
}: LoadMoreListProps) {
  const [items, setItems] = React.useState<string[]>(initialItems);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const itemsLeft = totalItems - items.length;
      const itemsToAdd = Math.min(batchSize, itemsLeft);

      if (itemsToAdd > 0) {
        const nextBatch = Array.from(
          { length: itemsToAdd },
          (_, index) => `Item ${items.length + index + 1}`
        );

        setItems([...items, ...nextBatch]);
      }

      setIsLoading(false);
    }, loadingDelay);
  };

  return (
    <Container>
      <ListContainer>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ListContainer>

      <LoadMore
        currentCount={items.length}
        total={totalItems}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </Container>
  );
}
