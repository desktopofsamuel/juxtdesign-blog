import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('main', {
  padding: '0 $2',
  margin: '0 auto',

  '@sm': {
    padding: '0 $1',
  },

  variants: {
    size: {
      medium: {
        maxWidth: '1280px',
      },
      small: {
        maxWidth: '1000px',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

type ContainerProps = {
  size: 'small' | 'medium';
};

const Container: React.FC<ContainerProps> = ({ children, size }) => (
  <Wrapper size={size}>{children}</Wrapper>
);

export default Container;
