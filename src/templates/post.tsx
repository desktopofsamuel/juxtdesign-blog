import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import {
  PageTitle,
  Subheading,
  Paragraph,
  PageMetadata,
} from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';
import SEO from '@/components/SEO';
import config from '../../static/SiteConfig';

const Grid = styled('div', {
  display: 'grid',
  // gridTemplateColumns: 'minmax(24px, 1fr) 8fr minmax(24px, 1fr)',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '5vw',

  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Wrapper = styled('div', {});

const PostTemplate: React.FC<PageProps> = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const postNode = data.mdx;
  const { headings } = postNode;
  const toc = postNode.tableOfContents;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />

      {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
      <Container size="small">
        <PageTitle css={{ '@sm': { fontSize: '$5' } }}>{post.title}</PageTitle>
        <hr />
        <Grid>
          <Wrapper>
            <PageMetadata type="label">Updated on</PageMetadata>
            <PageMetadata type="value">
              <time>{post.date}</time>
            </PageMetadata>
          </Wrapper>
          <Wrapper>
            <PageMetadata type="label">Read Time</PageMetadata>
            <PageMetadata type="value">
              {postNode.timeToRead} {postNode.timeToRead > 1 ? 'mins' : 'min'}
            </PageMetadata>
          </Wrapper>
          <Wrapper>
            <PageMetadata type="label">Author</PageMetadata>
            <PageMetadata type="value">Samuel Wong</PageMetadata>
          </Wrapper>
          <Wrapper>
            <PageMetadata type="label">Share</PageMetadata>
            <PageMetadata type="value">
              <Link
                to={`https://twitter.com/intent/tweet?text=${post.title}&url=${config.siteUrl}${postNode.fields.slug}`}
              >
                Twitter
              </Link>
            </PageMetadata>
          </Wrapper>
        </Grid>

        <Subheading>{post.category}</Subheading>

        <MDXRenderer>{postNode.body}</MDXRenderer>
        {/* <Row>
              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
            </Row> */}
        {/* <Disqus postNode={postNode} /> */}
      </Container>
      {/* <TableOfContents headings={headings} toc={toc} /> */}
      {/* <TOC2 /> */}
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...post
    }
  }
`;
