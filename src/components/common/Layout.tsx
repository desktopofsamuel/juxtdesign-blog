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

  'h1, h2, h3, h4, h5, h6': {
    color: '$onBackground',
  },

  'p a': {
    textDecoration: 'underline',
  },

  a: {
    textDecoration: 'none',
    color: '$secondary',

    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '$primary',
    },
  },

  hr: {
    border: '1px $border solid',
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
    padding: '0 $1',
    borderRadius: '8px',
    backgroundColor: '$codeBackground',
    color: '$grey500',
  },

  input: {
    width: '100%',
    height: '30px',
    background: 'none',
    margin: '$1 0',
    padding: '$1 $2',
    border: '2px solid $border',
    borderRadius: '8px',
    color: '$onPrimary',
    fontSize: '$2',
    fontFamily: '$sans',

    '&:focus': {
      borderColor: '$onBackground',
    },
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
