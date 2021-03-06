import { styled } from 'gatsby-theme-stitches/src/stitches.config';

export const Button = styled('button', {
  background: 'none',
  padding: '$2 $4',
  boxShadow: 'none',
  cursor: 'pointer',
  transition: '$default',
  fontSize: '$1',
  textTransform: 'uppercase',

  borderRadius: '36px',
  color: '$onBackground',
  fontFamily: '$sans',

  '&:hover': {
    backgroundColor: '$grey500',
    color: '$grey100',
  },

  // '&:disabled': {
  //   cursor: 'not-allowed',
  //   backgroundColor: '$grey100',
  //   color: '$grey700',
  //   PointerEvent: 'none',
  // },

  variants: {
    // disabled: {
    //   true: {
    //     cursor: 'not-allowed',
    //     opacity: '0.2',
    //     PointerEvent: 'none',
    //   },
    // },
    color: {
      onPrimary: {
        border: '2px $grey100 solid',
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
