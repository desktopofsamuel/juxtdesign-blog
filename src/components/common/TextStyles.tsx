import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const PageTitle = styled('h1', {
  margin: '0',
  fontSize: '$6',
  fontFamily: '$sans',
  fontWeight: '$bold',
  color: '$onBackground',
});

export const ResourceTitle = styled('h2', {
  margin: '0',
  fontSize: '$4',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'none',
  color: '$onBackground',
});

export const ResourceType = styled('h3', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  color: '$secondary',
});

export const Subheading = styled('h3', {
  margin: '$3 0',
  fontSize: '$3',
  textTransform: 'uppercase',
});

export const Paragraph = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$body',
});

export const PageMetadata = styled('p', {
  margin: '0',
  fontSize: '$3',
  fontFamily: '$sans',
  fontWeight: '$regular',
  color: '$primary',

  variants: {
    type: {
      label: {
        fontWeight: '$regular',
        fontSize: '$1',
        textTransform: 'uppercase',
        color: '$grey500',
      },
      value: {
        fontWeight: '$bold',
        color: '$secondary',
      },
    },
  },
});
