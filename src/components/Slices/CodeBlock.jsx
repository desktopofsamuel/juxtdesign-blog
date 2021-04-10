import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Content = styled('div', {
  paddingBottom: '2rem',
  maxWidth: '760px',
});

const CodeBlock = ({ input }) => (
  <Content
    dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }}
  />
);

export default CodeBlock;
