import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import {
  ResourceTitle,
  Paragraph,
  Subheading,
  PageMetadata,
} from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';

const Article = styled(Link, {
  padding: '0 1rem 2rem 0',
  gridGap: '$4',
  gridColumn: 'span 4',
  gridRow: 'span 3',
});

type BlogListProps = {
  post: any;
  posts?: [];
  css?: any;
  showFeaturePhoto?: boolean;
  className?: string;
};

const defaultProps: BlogListProps = {
  posts: [],
  post: {},
  showFeaturePhoto: false,
  css: '',
  className: '',
};

const BlogList = ({ css, posts, showFeaturePhoto }) => {
  const postList = [];
  posts.forEach((postEdge) => {
    postList.push({
      slug: postEdge.node.fields.slug,
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

  return postList.map((post) => (
    <Article to={`/posts${post.slug}/`} key={post.slug} css={css}>
      {post.featurePhoto !== null && showFeaturePhoto ? (
        <GatsbyImage
          image={post.featurePhoto.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
      ) : null}
      <PageMetadata type="label">{post.date}</PageMetadata>
      <ResourceTitle>{post.title}</ResourceTitle>
      <Paragraph>{post.excerpt}</Paragraph>
    </Article>
  ));
};

// const ListItem: React.FC<BlogListProps> = ({
//   post,
//   css,
//   className,
//   showFeaturePhoto,
// }) => (
//   <Article
//     to={`/posts${post.node.fields.slug}/`}
//     key={post.node.fields.slug}
//     css={css}
//     className={className}
//   >
//     {post.node.frontmatter.featurePhoto !== null && showFeaturePhoto ? (
//       <GatsbyImage
//         image={
//           post.node.frontmatter.featurePhoto.childImageSharp.gatsbyImageData
//         }
//         alt={post.title}
//       />
//     ) : null}
//     <PageMetadata type="label">{post.node.frontmatter.date}</PageMetadata>
//     <ResourceTitle>{post.node.frontmatter.title}</ResourceTitle>
//     <Paragraph>{post.node.excerpt}</Paragraph>
//   </Article>
// );

// const BlogList: React.FC<BlogListProps> = ({
//   posts,
//   css,
//   showFeaturePhoto,
// }) => (
//   <>
//     {
//       /* Your post list here. */
//       posts.map((post: any) => (
//         <ListItem post={post} css={css} showFeaturePhoto={showFeaturePhoto} />
//       ))
//     }
//   </>
// );

// ListItem.defaultProps = defaultProps;

export default BlogList;
