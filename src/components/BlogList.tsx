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

type BlogListProps = {
  posts: any;
  css?: any;
  showFeaturePhoto?: boolean;
  className?: string;
};

const defaultProps: BlogListProps = {
  showFeaturePhoto: false,
  css: '',
  className: '',
};

const BlogList: React.FC<BlogListProps> = ({
  posts,
  css,
  showFeaturePhoto,
  className,
}) => (
  <>
    {
      /* Your post list here. */
      posts.map((post) => (
        <Article
          to={`/posts${post.node.fields.slug}`}
          key={post.node.fields.slug}
          css={css}
          showFeaturePhoto={showFeaturePhoto}
          className={className}
        >
          {post.node.frontmatter.featurePhoto !== null && showFeaturePhoto ? (
            <GatsbyImage
              image={
                post.node.frontmatter.featurePhoto.childImageSharp
                  .gatsbyImageData
              }
              alt={post.title}
            />
          ) : null}
          {/* <GatsbyImage
            image={
              post.node.frontmatter.featurePhoto.childImageSharp.gatsbyImageData
            }
            alt={post.title}
          /> */}
          <ResourceTitle>{post.node.frontmatter.title}</ResourceTitle>
          <Paragraph>{post.node.excerpt}</Paragraph>
        </Article>
      ))
    }
  </>
);

BlogList.defaultProps = defaultProps;

export default BlogList;
