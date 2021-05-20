import * as React from 'react';
import { getCssString } from './src/gatsby-theme-stitches/stitches.config.ts';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />,
  ]);
};
