import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('div', {
  maxWidth: '1280px',
  padding: '0 $2',
  margin: '0 auto',

  '@sm': {
    padding: '0 $1',
  },
});

const Container: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
