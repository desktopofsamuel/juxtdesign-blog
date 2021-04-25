import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('main', {
  padding: '0 $2',
  margin: '0 auto',

  variants: {
    size: {
      medium: {
        maxWidth: '1440px',
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
  size?: 'small' | 'medium';
};

const defaultProps: ContainerProps = {
  size: 'medium',
};

const Container: React.FC<ContainerProps> = ({ children, size }) => (
  <Wrapper size={size}>{children}</Wrapper>
);

Container.defaultProps = defaultProps;

export default Container;
