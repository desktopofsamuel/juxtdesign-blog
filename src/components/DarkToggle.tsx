import React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { ThemeContext } from '@/components/ThemeContext';

const InvisibleButton = styled('button', {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '0 !important',
  font: 'inherit',
  cursor: 'pointer',
});

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  const nextColor = colorMode !== 'dark' ? 'dark' : 'light';
  const SwitchToDark = colorMode === 'dark';
  const SwitchToLight = colorMode === 'light';
  const title = `Activate ${nextColor} mode`;

  return (
    <>
      <ToggleButton
        aria-label={title}
        title={title}
        onClick={() => {
          setColorMode(nextColor);
        }}
      >
        ☾
      </ToggleButton>
      <ToggleButton
        aria-label={title}
        title={title}
        onClick={() => {
          setColorMode(nextColor);
        }}
      >
        ☀
      </ToggleButton>
    </>
  );
};

const ToggleButton = styled(InvisibleButton, {
  display: 'flex',
  alignItems: 'center',
});

export default DarkToggle;
