import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Layout from '@/components/common/Layout';
import config from '../../static/SiteConfig';

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

// const Container = styled.main`
//   overflow: hidden;
//   max-width: 700px;
//   margin: 0 auto;

//   & > * {
//     width: 100%;
//   }

//   ${mediaQuery.maxMobile} {
//     display: block;
//     padding: 0 16px;
//   }

//   & > * {
//     max-width: 100%;
//   }
// `;

const Container = styled('main', {
  width: '100%',
  margin: '0 auto',

  '& > *': {
    width: '100%',
  },
});

const Row = styled('section', {
  padding: '2rem 0',
});

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
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
          <Container>
            <h1>{post.title}</h1>
            <small>
              <time>{post.date}</time>
            </small>
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
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...post
    }
  }
`;
