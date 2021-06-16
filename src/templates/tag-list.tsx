import React from 'react';
import { Helmet } from 'react-helmet';
import Link from '@/components/common/GatsbyLink';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import kebabCase from 'lodash.kebabcase';
import startCase from 'lodash.startcase';
import Layout from '@/components/common/Layout';
import Container from '@/components/common/Container';
import AppList from '@/components/AppList';
import BlogList from '@/components/BlogList';
import { PageTitle, Subheading } from '@/components/common/TextStyles';
import config from '../../static/SiteConfig';
import SEO from '../components/common/SEO';
import useTagsList from '../hooks/useTagList.js';
import Tag from '@/components/common/Tag';

const TagList = () => {
  const tags = useTagsList();

  return (
    <Layout>
      <Container>
        <PageTitle>Tags</PageTitle>
        <ul>
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default TagList;
