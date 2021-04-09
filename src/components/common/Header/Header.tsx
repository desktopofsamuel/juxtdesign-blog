import Link from '@/components/common/GatsbyLink';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <p>Test</p>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
