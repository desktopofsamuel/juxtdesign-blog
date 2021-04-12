import React from 'react';
import Link from '@/components/common/GatsbyLink';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import DarkModeToggle from './DarkModeToggle';
import SiteLogo from '~/static/favicon.svg';

const Wrapper = styled('nav', {
  height: '100px',
  display: 'flex',
  gap: '$4',
  placeContent: 'center center',
  alignItems: 'center',
});

const Logo = styled('img', {
  width: '40px',
  height: '40px',
});

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/tags/color">Color</Link>
      <Logo src={SiteLogo} alt="Site Logo" />
      <Link to="/tags/typography">Typography</Link>
      <DarkModeToggle />
    </Wrapper>
  );
};

export default Header;
