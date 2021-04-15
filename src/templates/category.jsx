import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '@/components/common/Layout';
import BlogList from '@/components/BlogList';
import config from '../../static/SiteConfig';
import Container from '@/components/common/Container';
import { PageTitle } from '@/components/common/TextStyles';

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext;
  const postEdges = data.allMdx.edges;
  return (
    <Layout>
      <Container size="small">
        <Helmet title={`Posts in "${category}" | ${config.siteTitle}`} />
        <PageTitle>Posts in {category}</PageTitle>
        <BlogList posts={postEdges} />
      </Container>
    </Layout>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          ...list
        }
      }
    }
  }
`;
