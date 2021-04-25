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

      green100: '#F1F9F8',
      green500: '#025050',
      red500: '#FF6347',
      rice100: '#F9F5F1',
      rice300: '#F6F1EC',
      white100: '#ffffff',
      grey100: '#E5EAF0',
      grey500: '#575C63',
      grey700: '#272D2D',
      transparent: 'rgba(0,0,0,0)',
      // Alias
      primary: '$green500',
      primaryLighter: '$green100',
      secondary: '$red500',
      body: '$grey500',
      background: '$rice100',
      backgroundDarker: '$rice300',
      surface: '$white100',
      onBackground: '$grey700',
      onSurface: '$grey700',
      onPrimary: '$white100',
      border: '$grey100',
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
      1: '14px',
      2: '16px',
      3: '18px',
      4: '24px',
      5: '28px',
      6: '36px',
      7: '48px',
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

// export const light = theme('light-theme', {
//   colors: {
//     primary: '$black',
//     secondary: '$blue700',
//   },
// });

export const dark = theme('dark-theme', {
  colors: {
    primary: '$white500',
    secondary: '$blue500',
    background: 'grey700',
    body: '$white100',
    onBackground: '$white100',
  },
});
