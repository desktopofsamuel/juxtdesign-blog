import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

const Content = styled('div', {
  maxWidth: '720px',
});

const BodyText = ({ input }) => (
  <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};
