import React from 'react';
import { PageProps, graphql, PageRenderer } from 'gatsby';
import { styled, dark } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import BlogList from '@/components/BlogList';
import { PageTitle, Subheading } from '@/components/common/TextStyles';
import SEO from '../components/common/SEO';
import config from '../../static/SiteConfig';
import { Helmet } from 'react-helmet';
import AppList from '@/components/AppList';

const AppListWrapper = styled('div', {
  padding: '$4 0',
  gridGap: '$3',
  gridColumn: 'span 9',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

const ResourcesPage = ({ data }) => {
  const { app } = data;
  return (
    <Layout>
      <Container>
        <PageTitle>Resources</PageTitle>
        <AppListWrapper>
          <AppList posts={app.edges} category />
        </AppListWrapper>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ResourcesPageQuery {
    app: allPrismicPost(sort: { fields: data___date, order: DESC }, limit: 16) {
      edges {
        node {
          ...app
        }
      }
    }
  }
`;

export default ResourcesPage;
