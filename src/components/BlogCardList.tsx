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

const Article = styled(Link, {
  position: 'relative',
  padding: '20vh $2 $2 $2',
  border: '2px solid $border',
  borderRadius: '8px',
  display: 'grid',
  gridGap: '$2',
  gridColumn: 'span 4',
  gridRow: 'span 3',
  marginBottom: '$4',
  borderBottom: '1px solid $border',
  transition: '$default',

  '&:hover': {
    boxShadow: '0px 16px 16px rgba(0,0,0,0.1)',
  },
});

const SParagraph = styled(Paragraph, {});

type BlogCardListProps = {
  post: any;
  posts?: [];
  css?: any;
  showFeaturePhoto?: boolean;
  showDate?: boolean;
  hideExcerpt?: boolean;
  className?: string;
};

const defaultProps: BlogCardListProps = {
  posts: [],
  post: {},
  showDate: false,
  hideExcerpt: false,
  css: '',
  className: '',
};

const BlogCardList: React.FC = ({
  css,
  posts,
  showDate,
  hideExcerpt,
}: BlogCardListProps) => {
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
      {post.featurePhoto !== null ? (
        <img
          src={post.featurePhoto.publicURL}
          alt={post.title}
          height={50}
          width={50}
        />
      ) : null}
      <ResourceTitle>{post.title}</ResourceTitle>
      {hideExcerpt ? null : <SParagraph>{post.excerpt}</SParagraph>}
      {showDate ? <PageMetadata type="label">{post.date}</PageMetadata> : null}
    </Article>
  ));
};

BlogCardList.defaultProps = defaultProps;

export default BlogCardList;
