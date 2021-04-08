import React from 'react';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  console.log(darkMode.value);

  const buttonValue = darkMode ? 'Dark' : 'Light';

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
