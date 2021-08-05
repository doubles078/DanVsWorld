import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false,
  );
  useEffect(() => {
    if (localStorage && document) {
      const localTheme = localStorage.getItem('theme');

      if (localTheme) {
        document
          .getElementsByTagName('HTML')[0]
          .setAttribute('data-theme', localTheme);
      }
    }
  }, []);
};
