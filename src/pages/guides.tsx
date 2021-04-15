import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import BlogList from '@/components/BlogList';
import { Subheading } from '@/components/common/TextStyles';

const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
});

const Guides: React.FC = ({ data }) => {
  const { featureBlog, allBlog } = data;

  return (
    <Layout>
      <Container>
        <Subheading>Featured</Subheading>
        <Grid>
          <BlogList
            posts={featureBlog.edges}
            css={{
              gridColumn: 'span 6',
              '@md': { gridColumn: 'span 12' },
            }}
          />
        </Grid>
        <Subheading>all</Subheading>
        <Grid>
          <BlogList
            posts={allBlog.edges}
            css={{
              gridColumn: 'span 6',
              '@md': { gridColumn: 'span 12' },
            }}
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
    allBlog: allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          ...post
        }
      }
    }
  }
`;
