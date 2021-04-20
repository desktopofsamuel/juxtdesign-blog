import React from 'react';
import Link from '@/components/common/GatsbyLink';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
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

  '@md': {
    display: 'none',
  },
});

const SubMenuItem = styled(Link, {
  color: '$onBackground',
  textAlign: 'center',
  margin: '$2 0',
});

const Header: React.FC = () => (
  <Wrapper>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/tags/color/" activeClassName="nav-item-active">
      <p>Categories</p>
      <Submenu>
        <SubMenuItem to="/tags/career/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Career</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/color/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Color</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/design-conference/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Design Conference</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/illustrations/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Illustrations</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/typography/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Typography</p>
        </SubMenuItem>
      </Submenu>
    </NavItem>

    <Link to="/">
      <Logo src={SiteLogo} alt="Site Logo" />
    </Link>
    <NavItem to="/guides/" activeClassName="nav-item-active">
      <p>Guides ›</p>
      <Submenu>
        <SubMenuItem to="/why-designers-need-a-personal-website/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Personal Website</p>
        </SubMenuItem>
        <SubMenuItem to="/3-quick-wins-to-make-your-website-accessible/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Accessibility</p>
        </SubMenuItem>
        <SubMenuItem to="/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
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
    {/* <DarkModeToggle /> */}
  </Wrapper>
);
export default Header;
