import React, { FunctionComponent } from "react";
import styled from "styled-components/macro";
import theme from "../../theme";
import { Breadcrumbs } from "../breadcrumbs";
import { BreadcrumbsList } from "../breadcrumbs";
import { Heading } from "../heading";
import { Box } from "../box";

type PageTitleProps = {
  title: string;
};

type PageTitleBreadcrumbsProps = {
  title: string;
  list: Array<BreadcrumbsList>;
  margin?: string;
};

const PageTitleWrapper = styled.div`
  h3 {
    line-height: 2rem;
    font-weight: ${theme.fontWeights.medium};
    margin: 0 0 ${theme.spacing.spacing01};
  }
`;

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  return (
    <PageTitleWrapper>
      <Heading level={3}>{title}</Heading>
    </PageTitleWrapper>
  );
};

export const PageTitleBreadcrumbs: FunctionComponent<PageTitleBreadcrumbsProps> = ({
  title,
  list,
  margin,
}) => {
  return (
    <Box innerSpacing="spacing04" shadow="shadow02">
      <PageTitle title={title} />
      <Breadcrumbs list={list} />
    </Box>
  );
};
