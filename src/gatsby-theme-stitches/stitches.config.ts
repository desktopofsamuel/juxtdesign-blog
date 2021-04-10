import { createCss } from '@stitches/react';

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      blue500: '#0077CC',
      blue700: '#000000',
      red400: 'tomato',
      red500: 'red',
      green500: '#025050',
      white500: '#ffffff',
      black: '#333333',
      // Alias
      primary: '$black',
      secondary: '$red500',
    },
    transitions: {
      default: ' 0.2s all ease-in-out',
    },
    space: {
      1: '8px',
      2: '16px',
      3: '24px',
      4: '48px',
      5: '60px',
      6: '120px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    fonts: {
      sans: 'Roboto, apple-system, Helvetica, Arial, sans-serif',
      serif: 'Calibre, Georgia, serif',
      mono:
        'Georgia, IBM Plex Mono, Courier, Menlo, Consolas, Monaco, Lucida Console, monospace',
    },
    fontWeights: {
      regular: '400',
      bold: '700',
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
  },
  media: {
    sm: '(max-width: 480px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1280px)',
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
