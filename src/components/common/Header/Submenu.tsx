import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';

const Wrapper = styled('section', {
  visibility: 'hidden',
  position: 'absolute',
  top: '81px',
  left: '0',
  width: '100%',
  margin: '0 auto',
  background: 'lightgrey',
  opacity: '0',
  transition: 'all 100ms ease-in',
});

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$2',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  justifyContent: 'space-between',
});

const Submenu: React.FC = ({ children }) => (
  <Wrapper>
    <Container size="small">
      <Grid>{children}</Grid>
    </Container>
  </Wrapper>
);

export default Submenu;
