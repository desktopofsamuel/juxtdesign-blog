import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import SliceZone from './SliceZone';

const ListItem = styled('div', {
  borderRadius: '8px',
  background: '$white500',
  transition: '$default',
  overflow: 'hidden',
  gridColumn: 'span 4',
  textDecoration: 'none',
  margin: '$2 0',

  '&:hover': {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
  },
});

const Title = styled('h3', {
  margin: '0',
  fontSize: '$4',
  fontFamily: '$sans',
  fontWeight: '$regular',
});

const ContentWrapper = styled('div', {
  padding: '$2',
});

const AppList = ({ posts }) => (
  <>
    {posts.map((post) => (
      <ListItem key={post.node.uid}>
        <a target="_blank" rel="noreferrer" href={post.node.data.url.url}>
          {!!post.node.data && !!post.node.data.feature ? (
            <GatsbyImage
              fluid={post.node.data.feature.fluid}
              style={{ maxHeight: '270px' }}
            />
          ) : null}
          <ContentWrapper>
            <Title>{post.node.data.title.text}</Title>
            <SliceZone allSlices={post.node.data.body} />
          </ContentWrapper>
        </a>
      </ListItem>
    ))}
  </>
);

export default AppList;
