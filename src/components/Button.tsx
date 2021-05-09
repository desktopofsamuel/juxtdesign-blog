import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const Button = styled('button', {
  background: 'none',
  padding: '$2 $3',
  boxShadow: 'none',
  cursor: 'pointer',
  transition: '$default',
  fontSize: '$1',
  textTransform: 'uppercase',

  borderRadius: '4px',
  color: '$onBackground',
  fontFamily: '$sans',

  '&:hover': {
    backgroundColor: '$grey500',
    color: '$grey100',
  },

  '&:disabled': {
    backgroundColor: '$grey100',
    color: '$grey700',
    PointerEvent: 'none',
  },

  variants: {
    color: {
      onPrimary: {
        border: '1px $grey100 solid',
        color: '$onPrimary',

        '&:hover': {
          backgroundColor: '$grey100',
          color: '$primary',
        },
      },
      onBackground: {
        border: '1px $grey500 solid',
        color: '$onBackground',
      },
    },
  },

  defaultVariants: {
    color: 'onBackground',
  },
});
