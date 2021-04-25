import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Container from '@/components/common/Container';
import Layout from '@/components/common/Layout';
import {
  PageTitle,
  Subheading,
  Paragraph,
  PageMetadata,
} from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';
import SEO from '../components/common/SEO';
import config from '../../static/SiteConfig';

const Default: React.FC<PageProps> = ({ pageContext, children, path }) => {
  return (
    <Layout>
      <Helmet>
        <title>{`${pageContext.frontmatter.title} | ${config.siteTitle} `}</title>
      </Helmet>
      <SEO postPath={path} />
      <Container>{children}</Container>
    </Layout>
  );
};

export default Default;
