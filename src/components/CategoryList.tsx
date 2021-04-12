import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import Link from '@/components/common/GatsbyLink';
import kebabCase from 'lodash.kebabcase';

const Wrapper = styled('aside', {
  gridColumn: 'span 3',
  display: 'flex',
  flexDirection: 'column',
});

const Item = styled(Link, {
  color: '$primary',
  textDecoration: 'none',
  transition: '$default',
  padding: '$2 $3',
  marginBottom: '16px',
  borderRight: '4px $transparent solid',

  '&:hover': {
    backgroundColor: '$green100',
    borderRight: '4px $green500 solid',
  },
});

const CategoryItem = ({ categoryNode }) => (
  <Item
    to={`/tags/${kebabCase(categoryNode.node.uid)}`}
    key={categoryNode.node.data.name}
    target="_blank"
  >
    {categoryNode.node.data.name}
  </Item>
);

type CategoryType = {
  categories: {
    node: {
      uid: string;
      data: {
        name: string;
      };
    };
  };
};

const CategoryList = ({ categories }: CategoryType) => (
  <Wrapper>
    {categories.map((post) => (
      <CategoryItem key={post.node.uid} categoryNode={post} />
    ))}
  </Wrapper>
);

export default CategoryList;
