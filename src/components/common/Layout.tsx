import React from 'react';
import { global } from 'gatsby-theme-stitches/src/stitches.config';
import Header from '@/components/common/Header/Header';
import '../../../static/typography.css';

const globalStyles = global({
  html: {
    fontFamily: '$sans',
    fontWeight: '$regular',
    fontSize: '$3',
    lineHeight: '$regular',
    margin: '0',
    padding: '0',
  },

  a: {
    textDecoration: 'none',
    color: '$primary',
  },
});

const Layout: React.FC = ({ children }) => {
  globalStyles();
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
