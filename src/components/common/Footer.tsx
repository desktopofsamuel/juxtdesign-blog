import React from 'react';
import { Helmet } from 'react-helmet';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import FooterForm from './FooterForm';
import NewsletterForm from './NewsletterForm';
import GatsbyLink from './GatsbyLink';

const FooterContainer = styled('footer', {
  backgroundColor: '$spark',
  color: '$onPrimary',
});

const FooterGrid = styled('div', {
  padding: '$5 0 $6 0',
  display: 'grid',
  gridTemplateColumns: 'minmax(300px, 500px) auto',
  justifyContent: 'space-between',
  gridGap: '$2',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

const FooterLeft = styled('div', {});

const FooterRight = styled(FooterLeft, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const Title = styled('h3', {
  fontSize: '$4',
  color: '$white100',
});

const Paragraph = styled('p', {});

const Link = styled(GatsbyLink, {
  textDecoration: 'none',
  color: '$onPrimary',
});

const Footer: React.FC = () => (
  <FooterContainer>
    <Container>
      <FooterGrid>
        <FooterLeft>
          <Wrapper>
            <Paragraph>
              Sign up for our bi-monthly emails. Don't worry - only the best
              design resources and tips will be delivered to you.{' '}
            </Paragraph>
            {/* <FooterForm /> */}
            <NewsletterForm />
          </Wrapper>
        </FooterLeft>
        <FooterRight>
          <Wrapper>
            <Title>Explore</Title>
            <Link to="/about/">About</Link>
            <Link to="/guides/">Blog</Link>
            <Link to="/resources/">Resource</Link>
          </Wrapper>
          <Wrapper>
            <Title>Follow</Title>
            <Link target="_blank" to="https://twitter.com/juxtdesignco">
              Twitter
            </Link>
            <Link target="_blank" to="https://instagram.com/juxtdesignco">
              Instagram
            </Link>
          </Wrapper>
          <Wrapper>
            <Title>Get In Touch</Title>
            <Link target="_blank" to="mailto:hello@juxtdesign.cc">
              hello@juxtdesign.cc
            </Link>
          </Wrapper>
        </FooterRight>
      </FooterGrid>
    </Container>
  </FooterContainer>
);

export default Footer;
