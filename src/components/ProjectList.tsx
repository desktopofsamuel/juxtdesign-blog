import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
// import { StaticImage } from 'gatsby-plugin-image';
import { ResourceTitle, Paragraph } from '@/components/common/TextStyles';
import Link from '@/components/common/GatsbyLink';

const Wrapper = styled('div', {});

type ProjectType = {
  title: string;
  description: string;
  url: string;
};

const ProjectList = ({ data }: any) => (
  <Wrapper>
    {data.map((item: ProjectType) => (
      <Wrapper key={item.title}>
        <ResourceTitle>{item.title}</ResourceTitle>
        <Paragraph>{item.description}</Paragraph>
        <Link to={item.url} target="_blank">
          Learn More
        </Link>
      </Wrapper>
    ))}
  </Wrapper>
);
export default ProjectList;
