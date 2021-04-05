import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Header = styled('h1', {
  color: '$red500',
});

const Title: React.FC = () => <Header>Hello TypeScript!</Header>;

export default Title;
