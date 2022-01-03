import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import {
  ResourceTitle,
  Paragraph,
  ProjectTitle,
} from '@/components/common/TextStyles';
import projects from '../../content/project.json';
import Container from './common/Container';
import { Button } from './Button';
import Link from './common/GatsbyLink';

const Row = styled('section', {
  background: '#134042',
  width: '100vw',
  position: 'relative',
  marginLeft: '-50vw',
  left: '50%',
});

const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '50vh',
});

const ProjectDescripiton = styled(Paragraph, {
  color: '$white100',
});

const Products: React.FC = () => (
  <>
    {projects.map((item: ProjectType) => (
      <Row css={{ background: `${item.background}` }}>
        <Container>
          <Grid>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDescripiton>{item.description}</ProjectDescripiton>
            <Button>
              <Link to={item.url}>View Project</Link>
            </Button>
          </Grid>
        </Container>
      </Row>
    ))}
  </>
);

export default Products;
