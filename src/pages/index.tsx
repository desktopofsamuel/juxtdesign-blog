import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';
import Header from '@/components/common/Header/Header';

const Home: React.FC<PageProps> = () => (
  <main>
    <Header />
    <Title />
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
    <p>
      Follow me on Twitter (
      <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
    </p>
  </main>
);

export default Home;
