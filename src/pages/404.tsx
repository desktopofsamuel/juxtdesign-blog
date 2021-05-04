import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/common/Layout';
import Container from '@/components/common/Container';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <Container>
      <p>Sorry, page not found!</p>
    </Container>
  </Layout>
);

export default NotFound;
