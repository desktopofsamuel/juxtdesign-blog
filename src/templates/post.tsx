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
import config from '../../static/SiteConfig';
import Link from '@/components/common/GatsbyLink';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(24px, 1fr) 8fr minmax(24px, 1fr)',
  gridAutoFlow: 'column',
  gap: '5vw',

  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Row = styled('section', {
  padding: '2rem 0',
});

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
      {/* <SEO postPath={slug} postNode={postNode} postSEO /> */}
      <Grid>
        <div></div>
        {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
        <Container size="small">
          <Subheading>
            <time>{post.date}</time>
          </Subheading>
          <Subheading>{post.category}</Subheading>
          <PageMetadata>Read Time</PageMetadata>
          <PageMetadata weight="bold">{postNode.timeToRead}</PageMetadata>
          <PageMetadata>Share</PageMetadata>
          <PageMetadata>
            <Link
              to={`https://twitter.com/intent/tweet?text=${post.title}&url=${config.siteUrl}${postNode.fields.slug}`}
            >
              Twitter
            </Link>
          </PageMetadata>
          <PageTitle>{post.title}</PageTitle>

          <MDXRenderer>{postNode.body}</MDXRenderer>
          {/* <Row>
              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
            </Row> */}
          {/* <Disqus postNode={postNode} /> */}
        </Container>
        {/* <TableOfContents headings={headings} toc={toc} /> */}
        {/* <TOC2 /> */} <div></div>
      </Grid>
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
