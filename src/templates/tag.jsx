import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import startCase from 'lodash.startcase';
import Layout from '@/components/common/Layout';
import Container from '@/components/common/Container';
import AppList from '@/components/AppList';
import BlogList from '@/components/BlogList';
import { PageTitle, Subheading } from '@/components/common/TextStyles';
import config from '../../static/SiteConfig';
import SEO from '../components/common/SEO';

const Row = styled('section', {
  padding: '1rem 0',
});

const AppGridRow = styled('section', {
  display: 'grid',
  gridTemplate: 'auto/repeat(12, 1fr)',
  gridGap: '$3',
  padding: '$2 0',
});

const Header = styled('div', {
  padding: '$6 0',

  '@md': {
    padding: '$4 0',
  },
});

const Heading = styled('h1', {
  fontFamily: '$sans',
  fontWeight: '$regular',
  fontSize: '$5',
});

const Subtitle = styled('p', {
  fontSize: '$4',

  '@md': {
    fontSize: '$3',
  },
});

const TagTemplate = ({ pageContext, data }) => {
  const { slug, tag } = pageContext;
  const StartCase = startCase(tag);
  // GraphQL
  const blogEdges = data.blog.edges;
  const appEdges = data.app.edges;

  // SEO
  const title = `Posts tagged as "${StartCase}" | ${config.siteTitle}`;
  const description = data.category ? data.category.data.description : null;
  const keywords = data.category ? data.category.data.keywords : null;
  const featurePhoto = data.category ? data.category.data.image.url : null;

  return (
    <Layout>
      <Container>
        <Helmet title={title} />
        <SEO
          pageTitle={title}
          pageDescription={description}
          pageKeywords={keywords}
          pageImage={featurePhoto}
          postPath={slug}
        />
        <Header>
          <Subheading>Topic</Subheading>
          <PageTitle>{StartCase}</PageTitle>
          <Subtitle>{description}</Subtitle>
        </Header>
        <hr />
        <Row>
          {!!blogEdges[0] && <Subheading>Articles</Subheading>}
          <BlogList posts={blogEdges} />
        </Row>
        <Row>
          {!!appEdges[0] && <Subheading>Apps</Subheading>}
          <AppGridRow>
            <AppList
              type
              css={{
                gridColumn: 'span 3',
                '@lg': { gridColumn: 'span 4' },
                '@md': { gridColumn: 'span 6' },
                '@sm': { gridColumn: 'span 12' },
              }}
              posts={appEdges}
            />
          </AppGridRow>
        </Row>
      </Container>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    category: prismicCategory(uid: { eq: $tag }) {
      data {
        name
        keywords
        description
        image {
          url
        }
      }
    }
    app: allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {
        data: { categories: { elemMatch: { category: { uid: { eq: $tag } } } } }
      }
    ) {
      edges {
        node {
          ...app
        }
      }
    }
    blog: allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
