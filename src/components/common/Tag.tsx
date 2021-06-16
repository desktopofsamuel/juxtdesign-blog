import React from 'react';
import Link from '@/components/common/GatsbyLink';
import kebabCase from 'lodash.kebabcase';
import startCase from 'lodash.startcase';

type tagType = {
  fieldValue: string;
  totalCount: number;
};

const Tag = ({ tag }: tagType) => {
  return (
    <li key={tag.fieldValue}>
      <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
        {startCase(tag.fieldValue)} ({tag.totalCount})
      </Link>
    </li>
  );
};

export default Tag;
