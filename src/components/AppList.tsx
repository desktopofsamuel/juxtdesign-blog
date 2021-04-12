import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { ResourceTitle, ResourceType } from '@/components/common/TextStyles';
import SliceZone from './SliceZone';

const ListItem = styled('div', {
  borderRadius: '8px',
  background: '$white500',
  transition: '$default',
  overflow: 'hidden',
  margin: '$2 0',
  border: '1px $black solid',

  '&:hover': {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  },
});

const Title = styled(ResourceTitle, {});

const ContentWrapper = styled('div', {
  padding: '$2',
  color: '$primary',
  textDecoration: 'none',
});

// const Category = styled('p', {});

const AppList = ({ posts, css }) => (
  <>
    {posts.map((post) => (
      <ListItem key={post.node.uid} css={css}>
        <a target="_blank" rel="noreferrer" href={post.node.data.url.url}>
          {!!post.node.data && !!post.node.data.feature ? (
            <img
              src={post.node.data.feature.url}
              style={{ maxWidth: '100%' }}
              alt={post.node.data.title.text}
            />
          ) : null}
          <ContentWrapper>
            {post.node.data.types.document ? (
              <ResourceType>
                {post.node.data.types.document.data.name}
              </ResourceType>
            ) : null}
            {/* <Category>{post.node.data.categories.category}</Category> */}
            <Title>{post.node.data.title.text}</Title>
            <SliceZone allSlices={post.node.data.body} />
          </ContentWrapper>
        </a>
      </ListItem>
    ))}
  </>
);

export default AppList;
