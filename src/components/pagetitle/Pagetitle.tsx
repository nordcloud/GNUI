import * as React from "react";
import { styled } from "styled-components";
import theme from "../../theme";
import { Box } from "../box";
import { Breadcrumbs, BreadcrumbsList } from "../breadcrumbs";
import { Heading } from "../heading";

type PageTitleProps = {
  title: string;
};

type PageTitleBreadcrumbsProps = {
  title: string;
  list: BreadcrumbsList[];
};

const PageTitleWrapper = styled.div`
  h3 {
    line-height: 2rem;
    font-weight: ${theme.fontWeights.medium};
    margin: 0 0 ${theme.spacing.spacing01};
  }
`;

export function PageTitle({ title }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      <Heading level={3}>{title}</Heading>
    </PageTitleWrapper>
  );
}

export function PageTitleBreadcrumbs({
  title,
  list,
}: PageTitleBreadcrumbsProps) {
  return (
    <Box innerSpacing="spacing04" shadow="shadow02">
      <PageTitle title={title} />
      <Breadcrumbs list={list} />
    </Box>
  );
}
