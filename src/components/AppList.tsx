import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { ResourceTitle, ResourceType } from '@/components/common/TextStyles';
import SliceZone from './SliceZone';

const ListItem = styled('div', {
  borderRadius: '8px',
  transition: '$default',
  overflow: 'hidden',
  border: '2px $border solid',

  '&:hover': {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  },
});

const ContentWrapper = styled('div', {
  padding: '$2',
  textDecoration: 'none',
});

// type Props = {
//   posts
// }

const AppList: React.FC = ({ posts, css, category, type }) => (
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
            {type && post.node.data.types.document ? (
              <ResourceType>
                {post.node.data.types.document.data.name}
              </ResourceType>
            ) : null}
            {category && post.node.data.categories ? (
              <ResourceType>
                {post.node.data.categories[0].category.document.data.name}
              </ResourceType>
            ) : null}
            {/* <Category>{post.node.data.categories.category}</Category> */}
            <ResourceTitle>{post.node.data.title.text}</ResourceTitle>
            <SliceZone allSlices={post.node.data.body} />
          </ContentWrapper>
        </a>
      </ListItem>
    ))}
  </>
);

export default AppList;
