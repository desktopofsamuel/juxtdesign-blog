import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import { PageTitle } from '@/components/common/TextStyles';
import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../components/common/SEO';
import config from '../../static/SiteConfig';

const AboutPage = (): any => {
  const title = `Guides | ${config.siteTitle}`;

  return (
    <Layout>
      <Helmet title={title} />
      <SEO postPath="/about" pageTitle={title} />
      <Container>
        <PageTitle>About Us</PageTitle>
      </Container>
    </Layout>
  );
};

export default AboutPage;
