import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const PageTitle = styled('h1', {
  margin: '0',
  fontSize: '$6',
  fontFamily: '$sans',
  fontWeight: '$bold',
  color: '$primary',
});

export const ResourceTitle = styled('h2', {
  margin: '0',
  fontSize: '$4',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$primary',
});

export const ResourceType = styled('h3', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  color: '$red400',
});

export const Subheading = styled('h3', {
  margin: '0',
  fontSize: '$3',
  textTransform: 'uppercase',
});

export const Paragraph = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$primary',
});

export const PageMetadata = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$secondary',

  variants: {
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      regular: {
        fontWeight: '$regular',
      },
    },
  },

  defaultVariants: {
    weight: 'regular',
  },
});
