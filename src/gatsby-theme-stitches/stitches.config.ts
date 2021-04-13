import { createCss } from '@stitches/react';

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    colors: {
      // Token
      blue300: '#0077CC',
      blue500: '#3C4F68',
      blue700: '#253141',
      red400: 'tomato',
      red500: 'red',
      red700: 'pink',
      green100: '#F1F9F8',
      green500: '#025050',
      white500: '#ffffff',
      lightgrey: '#E5EAF0',
      darkgrey: '#253141',
      black: '#333333',
      transparent: 'rgba(0,0,0,0)',
      // Alias
      primary: '$blue700',
      secondary: '$red500',
    },
    transitions: {
      default: ' 0.2s all ease-in-out',
    },
    space: {
      1: '4px',
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
      sans: 'HK Grotesk, apple-system, Helvetica, Arial, sans-serif',
      serif: 'Calibre, Georgia, serif',
      mono:
        'Georgia, IBM Plex Mono, Courier, Menlo, Consolas, Monaco, Lucida Console, monospace',
    },
    fontWeights: {
      regular: '500',
      bold: '700',
    },
    lineHeights: {
      regular: '1.5',
    },
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

export const light = theme('light-theme', {
  colors: {
    primary: '$black',
    secondary: '$blue700',
  },
});

export const dark = theme('dark-theme', {
  colors: {
    primary: '$red700',
    secondary: '$blue500',
  },
});
