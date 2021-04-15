import React from 'react';
import Link from '@/components/common/GatsbyLink';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import DarkModeToggle from './DarkModeToggle';
import SiteLogo from '~/static/favicon.svg';

const Wrapper = styled('nav', {
  height: '120px',
  display: 'flex',
  gap: '$4',
  placeContent: 'center center',
  alignItems: 'center',
});

const Logo = styled('img', {
  width: '40px',
  height: '40px',
});

const Header: React.FC = () => (
  <Wrapper>
    <Link to="/">Home</Link>
    <Link to="/tags/color/">Color</Link>
    <Link to="/guides/">Guides</Link>
    <Logo src={SiteLogo} alt="Site Logo" />
    <Link to="/tags/typography/">Typography</Link>
    <Link to="/categories/tutorial/">Tutorial</Link>
    <DarkModeToggle />
  </Wrapper>
);

export default Header;
