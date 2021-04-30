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

  '@md': {
    justifyContent: 'space-around',
  },
});

const Logo = styled('img', {
  width: '40px',
  height: '40px',
});

const NavItem = styled(Link, {
  height: '80px',
  display: 'grid',
  color: '$body',
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

const MobileNavItem = styled(Link, {
  height: '80px',
  color: '$body',
  padding: '0 $5',
  display: 'none',
  placeContent: 'center center',

  '@md': {
    display: 'grid',
  },
});

const SubMenuItem = styled(Link, {
  color: '$onBackground',
  textAlign: 'center',
  margin: '$2 0',
});

const Header: React.FC = () => (
  <Wrapper>
    <MobileNavItem to="/guides/">Guides</MobileNavItem>
    <NavItem to="/" activeClassName="nav-item-active">
      Home
    </NavItem>
    <NavItem to="/resources/" activeClassName="nav-item-active">
      <p>Categories ›</p>
      <Submenu>
        <SubMenuItem to="/tags/career/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/career.png"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Career</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/color/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/color.png"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Color</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/illustrations/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/illustrations.png"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Illustrations</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/typography/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/typography.png"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Typography</p>
        </SubMenuItem>
        <SubMenuItem to="/tags/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/more.png"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>More</p>
        </SubMenuItem>
      </Submenu>
    </NavItem>

    <Link to="/" style={{ margin: '0 24px' }}>
      <Logo src={SiteLogo} alt="Site Logo" />
    </Link>
    <NavItem to="/guides/" activeClassName="nav-item-active">
      <p>Guides ›</p>
      {/* <Submenu>
        <SubMenuItem to="/posts/why-designers-need-a-personal-website/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Personal Website</p>
        </SubMenuItem>
        <SubMenuItem to="/posts/3-quick-wins-to-make-your-website-accessible/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>Accessibility</p>
        </SubMenuItem>
        <SubMenuItem to="/posts/how-do-you-save-your-inspirations/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>How to prepare for an interview</p>
        </SubMenuItem>
        <SubMenuItem to="/guides/">
          <StaticImage
            as="span"
            alt=""
            src="../../../../static/menu/moment-backpack.jpg"
            imgStyle={{ borderRadius: '50%' }}
            style={{ height: '100px', width: '100px' }}
          />
          <p>More blog</p>
        </SubMenuItem>
      </Submenu> */}
    </NavItem>
    <NavItem to="/about/" activeClassName="nav-item-active">
      About
    </NavItem>
    <MobileNavItem to="/resources/">Resources</MobileNavItem>
    {/* <DarkModeToggle /> */}
  </Wrapper>
);
export default Header;
