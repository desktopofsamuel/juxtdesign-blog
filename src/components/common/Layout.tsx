import React from 'react';
import { global } from 'gatsby-theme-stitches/src/stitches.config';
import Header from '@/components/common/Header/Header';
import '../../../static/typography.css';
import Footer from '@/components/common/Footer';
import { ThemeProvider } from '@/components/ThemeContext';

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
    color: '$body',
  },

  a: {
    textDecoration: 'none',
    color: '$primary',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  hr: {
    border: '1px $grey100 solid',
    margin: '$3 0',
  },

  blockquote: {
    fontSize: '$4',
    textAlign: 'center',
    color: '$primary',
  },

  img: {
    maxWidth: '100%',
  },

  code: {
    backgroundColor: '$white100',
    color: '$grey500',
  },
});

const Layout: React.FC = ({ children }) => {
  globalStyles();
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
