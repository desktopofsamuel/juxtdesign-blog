import React from 'react';

import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbyImage } from 'gatsby-plugin-image';

const Content = styled('div', {
  paddingTop: '$2',
  paddingBottom: '$2',
});

const Image = ({ input }) => (
  <Content>
    <GatsbyImage fluid={input.primary.image.fluid} />
  </Content>
);

export default Image;
