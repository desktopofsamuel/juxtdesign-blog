import React, { useEffect, useState, useRef } from 'react';
import Link from '@/components/common/GatsbyLink';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Popup from 'reactjs-popup';
import { StaticImage } from 'gatsby-plugin-image';
import DarkModeToggle from './DarkModeToggle';
import SiteLogo from '~/static/favicon.svg';
import Submenu from './Submenu';
// import 'reactjs-popup/dist/index.css';

const Wrapper = styled('nav', {
  height: '80px',
  display: 'flex',
  placeContent: 'center center',
  alignItems: 'center',
  marginBottom: '$5',
  borderBottom: '2px $border solid',
});

const Logo = styled('img', {
  width: '40px',
  height: '40px',
});

const NavItem = styled(Link, {
  height: '80px',
  display: 'grid',
  placeContent: 'center center',
  padding: '0 $5',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: '$backgroundDarker',
  },

  '&:hover section': {
    visibility: 'visible',
    opacity: '1',
    color: '$primary',
  },

  '&.nav-item-active': {
    color: '$primary',
    borderBottom: '2px $primary solid',
  },
});

const SubMenuItem = styled(Link, {
  display: 'grid',
  placeContent: 'center center',
  textAlign: 'center',
  margin: '$2 0',
});

const Header: React.FC = () => (
  <Wrapper>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/tags/color/" activeClassName="nav-item-active">
      <p>Categories</p>
      <Submenu>
        <SubMenuItem>
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>Color</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/color">
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>Typography</p>
        </SubMenuItem>
        <SubMenuItem>
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>Career</p>
        </SubMenuItem>
      </Submenu>
    </NavItem>

    <NavItem to="/">
      <Logo src={SiteLogo} alt="Site Logo" />
    </NavItem>
    <NavItem to="/guides/" activeClassName="nav-item-active">
      <p>Guides ›</p>
      <Submenu>
        <SubMenuItem>
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>2</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/color">
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>4</p>
        </SubMenuItem>
        <SubMenuItem>
          <StaticImage
            width={80}
            height={80}
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
          />
          <p>How to prepare for an interview</p>
        </SubMenuItem>
      </Submenu>
    </NavItem>
    <NavItem to="/tags/typography/" activeClassName="nav-item-active">
      Typography
      <Submenu>
        <p>Block 4</p>
        <p>Block 5</p>
        <p>Block 6</p>
      </Submenu>
    </NavItem>
    <DarkModeToggle />
  </Wrapper>
);
export default Header;
