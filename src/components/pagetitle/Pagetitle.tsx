import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Breadcrumbs } from "../breadcrumbs";
import { BreadcrumbsList } from "../breadcrumbs";
import { Heading } from "../heading";
import { Box } from "../box";

interface PageTitleProps {
  title: string;
}

interface PageTitleBreadcrumbsProps {
  title: string;
  list: Array<BreadcrumbsList>;
  margin?: string;
  children?: any;
}

const PageTitleWrapper = styled.div`
  h3 {
    line-height:2rem;
    font-weight: ${theme.fontWeights.medium};
    margin: 0 0 ${theme.spacing.spacing01};
  }
`;

export const PageTitle: FunctionComponent<PageTitleProps> = ({ 
  title
}) => {
  return (
    <PageTitleWrapper>
      <Heading level={3}>{title}</Heading>
    </PageTitleWrapper>
)};


export const PageTitleBreadcrumbs: FunctionComponent<PageTitleBreadcrumbsProps> = ({ 
  title,
  list,
  margin
}) => {
  return (
    <Box padding="spacing04" shadow="shadow02" margin={margin}>
      <PageTitle title={title} />
      <Breadcrumbs list={list} />
    </Box>
)};
