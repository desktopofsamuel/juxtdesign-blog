import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Wrapper = styled('main', {
  padding: '0 $2',
  margin: '0 auto',

  variants: {
    size: {
      large: {
        maxWidth: '1440px',
      },
      medium: {
        maxWidth: '1000px',
      },
      small: {
        maxWidth: '800px',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

type ContainerProps = {
  size?: 'small' | 'medium' | 'large';
};

const defaultProps: ContainerProps = {
  size: 'large',
};

const Container: React.FC<ContainerProps> = ({ children, size }) => (
  <Wrapper size={size}>{children}</Wrapper>
);

Container.defaultProps = defaultProps;

export default Container;
