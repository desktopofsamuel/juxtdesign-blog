import React from 'react';
import { global } from 'gatsby-theme-stitches/src/stitches.config';
import Header from '@/components/common/Header/Header';
import '../../../static/typography.css';
import Footer from '@/components/common/Footer';

const globalStyles = global({
  html: {
    fontFamily: '$sans',
    fontWeight: '$regular',
    fontSize: '$3',
    lineHeight: '$regular',
    margin: '0',
    padding: '0',
    backgroundColor: '$background',
  },

  body: {
    margin: '0',
  },

  a: {
    textDecoration: 'none',
    color: '$primary',
  },

  hr: {
    border: '1px $grey100 solid',
    margin: '$3 0',
  },
});

const Layout: React.FC = ({ children }) => {
  globalStyles();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
