import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  ResourceTitle,
  Paragraph,
  Subheading,
  PageMetadata,
} from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Article = styled('div', {
  padding: '0 1rem 2rem 0',
  gridGap: '$4',
  gridColumn: 'span 4',
  gridRow: 'span 3',
});

const BlogDetail = ({ posts, css, showFeaturePhoto }) => {
  const detailList = [];
  posts.forEach((postEdge) => {
    detailList.push({
      slug:
        postEdge.node.frontmatter.url || `/posts${postEdge.node.fields.slug}/`,
      tags: postEdge.node.frontmatter.tags,
      featurePhoto: postEdge.node.frontmatter.featurePhoto,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.excerpt,
      category: postEdge.node.frontmatter.category,
      timeToRead: postEdge.node.timeToRead,
      body: postEdge.node.body,
    });
  });

  return detailList.map((post) => (
    <Article key={post.slug} css={css}>
      {post.featurePhoto !== null && showFeaturePhoto ? (
        <GatsbyImage
          image={post.featurePhoto.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
      ) : null}
      <PageMetadata type="label">{post.date}</PageMetadata>
      <ResourceTitle>{post.title}</ResourceTitle>
      {/* <Paragraph>{post.node.excerpt}</Paragraph> */}
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link to={post.slug}>View More</Link>
    </Article>
  ));
};

export default BlogDetail;
