import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { ResourceTitle, Paragraph } from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';

const Article = styled(Link, {
  padding: '0rem 1rem 2rem 2rem',
  gridGap: '2rem',
  gridColumn: 'span 4',
  gridRow: 'span 3',
});

const BlogList = ({ posts, css }) => (
  <>
    {
      /* Your post list here. */
      posts.map((post) => (
        <Article
          to={post.node.fields.slug}
          key={post.node.fields.slug}
          css={css}
        >
          <ResourceTitle>{post.node.frontmatter.title}</ResourceTitle>
          <Paragraph>{post.node.excerpt}</Paragraph>
        </Article>
      ))
    }
  </>
);

export default BlogList;
