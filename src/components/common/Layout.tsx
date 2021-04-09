import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Header from '@/components/common/Header/Header';

const Wrapper = styled('main', {
  margin: '0',
  padding: '0',
});

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default Layout;
