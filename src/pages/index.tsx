import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';
import Header from '@/components/common/Header/Header';
import Container from '@/components/common/Container';
import Footer from '@/components/common/Footer';
import Layout from '@/components/common/Layout';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <Container>
      <Title />

      <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
      <p>
        Follow me on Twitter (
        <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
      </p>
    </Container>
    <Footer />
  </Layout>
);

export default Home;
