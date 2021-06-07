import * as React from 'react';
import { Helmet } from 'react-helmet';
import {
  darkTheme,
  getCssString,
} from './src/gatsby-theme-stitches/stitches.config.ts';

function setColorsByTheme() {
  const colorModeKey = '🔑';
  const darkThemeClassName = '🌙';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;
  if (colorMode === 'dark') {
    root.classList.add(darkThemeClassName);
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('🔑', 'color-mode')
    .replace('🌙', darkTheme.className);

  const calledFunction = `(${boundFn})()`;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />
  );
};

export const onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  headComponents.sort((x, y) => {
    if (x.props && x.props['data-react-helmet']) {
      return -1;
    } else if (y.props && y.props['data-react-helmet']) {
      return 1;
    }
    return 0;
  });

  replaceHeadComponents(headComponents);
};
