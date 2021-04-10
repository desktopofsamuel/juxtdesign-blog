import React from 'react';
import { global } from '@stitches/react';
import Header from '@/components/common/Header/Header';

const globalStyles = global({
  body: {
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
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
