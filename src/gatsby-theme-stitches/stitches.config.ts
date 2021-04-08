import { createCss } from '@stitches/react';

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      blue500: '#0077CC',
      blue700: '#000000',
      red400: 'tomato',
      red500: 'red',
      // Alias
      primary: '$blue500',
      primaryDark: '$blue700',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Roboto, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const dark = theme('dark-mode', {
  colors: {
    primary: '$red500',
    secondary: '$blue700',
  },
  space: {},
  fonts: {},
});
