import React from 'react';
import { Helmet } from 'react-helmet';
import { PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import AppList from '@/components/AppList';
import CategoryList from '@/components/CategoryList';
import { Subheading } from '@/components/common/TextStyles';
import BlogList from '@/components/BlogList';
import config from '../../static/SiteConfig';

type IndexPageProps = {
  data: {
    category: {
      edges: {
        node: {
          uid: string;
          data: {
            name: string;
          };
        };
      };
    };
    app: {
      edges: object;
    };
    blog: {
      edges: object;
    };
  };
};

const Row = styled('div', {
  display: 'grid',
  gridTemplate: 'auto/repeat(12, 1fr)',
  gridGap: '4rem',

  '@md': {
    display: 'block',
  },
});

const AppListWrapper = styled('div', {
  gridGap: '$3',
  gridColumn: 'span 9',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@md': {
    display: 'block',
  },
});

const Block = styled('div', {});

const Landing = ({ data }: IndexPageProps) => {
  const { app, category, blog } = data;

  return (
    <Layout>
      <Helmet title={`${config.siteTitle}`} />
      <Container>
        <Row>
          <BlogList posts={blog.edges} />
        </Row>
        <Row>
          <Block css={{ gridColumn: 'span 3' }}>
            <Subheading>Categories</Subheading>
            <CategoryList categories={category.edges} />
          </Block>

          <AppListWrapper>
            <AppList posts={app.edges} category />
          </AppListWrapper>
        </Row>
      </Container>
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query IndexQuery {
    category: allPrismicCategory(sort: { order: ASC, fields: data___name }) {
      edges {
        node {
          uid
          data {
            name
          }
        }
      }
    }
    app: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      limit: 12
    ) {
      edges {
        node {
          ...app
        }
      }
    }
    blog: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
      filter: { frontmatter: { category: { ne: "Learn" } } }
    ) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
