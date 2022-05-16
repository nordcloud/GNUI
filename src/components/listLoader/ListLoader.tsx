/* Copyright (c) 2021-2022 Nordcloud Oy or its affiliates. All Rights Reserved. */

import * as React from "react";
import ContentLoader from "react-content-loader";
import theme from "../../theme";

function generateNumbers(limit: number) {
  return Array.from(Array(limit), (_e, i) => i + 1);
}

type Props = {
  itemsNumber?: number;
  children?: React.ReactNode;
};

export function ListLoader({ itemsNumber = 5, children }: Props) {
  return (
    <div>
      {generateNumbers(itemsNumber).map((item) => (
        <ListItem key={item}>{children}</ListItem>
      ))}
    </div>
  );
}

function DefaultItemsSkeleton() {
  return (
    <>
      <rect x="70" y="15" rx="5" ry="5" width="300" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="220" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </>
  );
}

type ListItemProps = {
  children?: React.ReactNode;
};

function ListItem({ children = <DefaultItemsSkeleton /> }: ListItemProps) {
  return (
    <ContentLoader
      speed={2}
      backgroundColor={theme.color.background.ui02}
      foregroundColor={theme.color.background.ui04}
      style={{ width: "100%", height: "80px" }}
    >
      {children}
    </ContentLoader>
  );
}
