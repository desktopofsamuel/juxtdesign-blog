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
  position: 'relative',
  padding: '0 $2 $2 0',
  display: 'grid',
  gridGap: '$2',
  gridColumn: 'span 4',
  gridRow: 'span 3',
  marginBottom: '$4',
  borderBottom: '1px solid $grey100',
});

const SParagraph = styled(Paragraph, {});

const Image = styled(GatsbyImage, {
  position: 'relative',
  overflow: 'visible!important',
  transition: '$default',

  '&:hover': {
    transform: 'translate3d(-4px,-4px,0)',
  },

  '&::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '0',
    right: '0',
    transition: '$default',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    border: '1.5px solid $transparent',
  },

  '&:hover::before': {
    borderColor: '$grey100',
    transform: 'translate3d(8px,8px,0)',
  },
});

type BlogListProps = {
  post: any;
  posts?: [];
  css?: any;
  showFeaturePhoto?: boolean;
  showDate?: boolean;
  hideExcerpt?: boolean;
  className?: string;
};

const defaultProps: BlogListProps = {
  posts: [],
  post: {},
  showFeaturePhoto: false,
  showDate: false,
  hideExcerpt: false,
  css: '',
  className: '',
};

const BlogList = ({ css, posts, showFeaturePhoto, showDate, hideExcerpt }) => {
  const postList = [];
  posts.forEach((postEdge) => {
    postList.push({
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

  return postList.map((post) => (
    <Article to={post.slug} key={post.title} css={css}>
      {post.featurePhoto !== null && showFeaturePhoto ? (
        <Image
          image={post.featurePhoto.childImageSharp.gatsbyImageData}
          alt={post.title}
        />
      ) : null}
      <ResourceTitle>{post.title}</ResourceTitle>
      {hideExcerpt ? null : <SParagraph>{post.excerpt}</SParagraph>}
      {showDate ? <PageMetadata type="label">{post.date}</PageMetadata> : null}
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

BlogList.defaultProps = defaultProps;

export default BlogList;
