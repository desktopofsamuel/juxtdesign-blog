import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { styled, dark } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import BlogList from '@/components/BlogList';
import { Subheading } from '@/components/common/TextStyles';
import SEO from '../components/common/SEO';
import config from '../../static/SiteConfig';
import { Helmet } from 'react-helmet';

const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: '$3',
});

const Row = styled('section', {
  backgroundColor: '$secondary',
  padding: '$4 0',
});

const Guides: React.FC = ({ data }) => {
  const { featureBlog, allBlog, learnBlog } = data;
  const title = `Guides | ${config.siteTitle}`;

  return (
    <Layout>
      <Helmet title={title} />
      <SEO postPath="/guides" pageTitle={title} />
      <Container>
        <Subheading>Featured</Subheading>
        <Grid>
          <BlogList
            showFeaturePhoto
            posts={featureBlog.edges}
            css={{ gridColumn: 'span 6', '@md': { gridColumn: 'span 12' } }}
          />
        </Grid>
      </Container>
      {/* <Row>
        <Container>
          <Subheading>Learn</Subheading>
          <Grid>
            <BlogList
              className={dark}
              posts={learnBlog.edges}
              css={{ gridColumn: 'span 6', '@md': { gridColumn: 'span 12' } }}
            />
          </Grid>
        </Container>
      </Row> */}
      <Container>
        <Subheading>all</Subheading>
        <Grid>
          <BlogList
            posts={allBlog.edges}
            css={{ gridColumn: 'span 6', '@md': { gridColumn: 'span 12' } }}
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Guides;

export const pagequery = graphql`
  query GuidesPageQuery {
    featureBlog: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { feature: { eq: true } } }
    ) {
      edges {
        node {
          ...post
        }
      }
    }
    allBlog: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { ne: "Learn" } } }
    ) {
      edges {
        node {
          ...post
        }
      }
    }
    learnBlog: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { eq: "Learn" } } }
    ) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
