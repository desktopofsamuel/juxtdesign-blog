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
  border: '1px $blue500 solid',
  padding: '0.5rem 1rem',
  marginBottom: '16px',
  borderRadius: '24px',

  '&:hover': {
    border: '1px $blue500 solid',
    backgroundColor: '$white500',
  },
});

const CategoryItem = ({ categoryNode }) => (
  <Item to={`/tags/${kebabCase(categoryNode.node.uid)}`}>
    {categoryNode.node.data.name}
  </Item>
);

const CategoryList = ({ categories }) => (
  <Wrapper>
    {categories.map((post) => (
      <CategoryItem categoryNode={post} />
    ))}
  </Wrapper>
);

export default CategoryList;
