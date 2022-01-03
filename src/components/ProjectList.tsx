import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { ResourceTitle, Paragraph } from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';

const Grid = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '$4',

  '@md': {
    gridTemplateColumns: '1fr',
  },
});

type ProjectType = {
  title: string;
  description: string;
  url: string;
  image: string;
  background: string;
};

const ProjectList = ({ data }: any) => {
  return (
    <Grid>
      {data.map((item: ProjectType) => (
        <Link to={item.url} target="_blank" key={item.title}>
          {console.log(item)}
          <img src={item.image} alt={item.title} />
          <ResourceTitle>{item.title}</ResourceTitle>
          <Paragraph>{item.description}</Paragraph>
        </Link>
      ))}
    </Grid>
  );
};
export default ProjectList;
