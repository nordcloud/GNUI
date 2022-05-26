/* Copyright (c) 2021-2022 Nordcloud Oy or its affiliates. All Rights Reserved. */

import * as React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import theme from "../../theme";

type Props = { height?: string } & IContentLoaderProps;

export function BrickLoader({ height, ...props }: Props) {
  return (
    <ContentLoader
      speed={2}
      backgroundColor={theme.color.background.ui02}
      foregroundColor={theme.color.background.ui04}
      style={{ width: "100%", height: height ?? "100%" }}
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
}
