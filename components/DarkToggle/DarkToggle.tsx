import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const DARK = 'dark';
const LIGHT = 'light';

export const DarkToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (localStorage && document) {
      const localTheme = localStorage.getItem('theme');

      if (localTheme) {
        document
          .getElementsByTagName('HTML')[0]
          .setAttribute('data-theme', localTheme);

        setIsDark(localTheme === DARK ? true : false);
      }
    }
  }, [isDark]);

  const handleOnChange = () => {
    if (localStorage && document) {
      const localTheme = localStorage.getItem('theme');

      if (!isDark) {
        localStorage.setItem('theme', DARK);
        if (localTheme) {
          document
            .getElementsByTagName('HTML')[0]
            .setAttribute('data-theme', localTheme);
        }
        setIsDark(true);
      } else {
        localStorage.setItem('theme', LIGHT);
        if (localTheme) {
          document
            .getElementsByTagName('HTML')[0]
            .setAttribute('data-theme', localTheme);
        }
        setIsDark(false);
      }
    }
  };

  // Making this component accesible via keyboard actions
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      handleOnChange();
    }
  };

  const spanClasses = classNames({
    DarkToggle__slider: true,
    'DarkToggle__slider--round': true,
    'DarkToggle__slider--focused': isFocused,
  });

  return (
    <label className={'DarkToggle'}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => handleOnChange()}
        onKeyPress={e => handleKeyPress(e)}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
      />

      <span className={spanClasses} />
    </label>
  );
};
