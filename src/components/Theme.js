import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '~/config/themes';

const themeKey = '@CovidAgora:Theme';

export const ThemeContext = createContext({
  theme: light,
  changeTheme: () => {},
});

const ThemeComponent = ({ children }) => {
  const [theme, setTheme] = useState(light);

  function changeTheme() {
    const themeName = theme.name;
    const changedTheme = themeName === 'light' ? dark : light;

    setTheme(changedTheme);
    localStorage.setItem(themeKey, changedTheme.name);
  }

  useEffect(() => {
    function resolveTheme() {
      const themeName = localStorage.getItem(themeKey);

      if (themeName !== theme.name) {
        setTheme(
          themeName === 'light' ? light : themeName === 'dark' ? dark : light,
        );
      }
    }

    resolveTheme();
    window.addEventListener('storage', resolveTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(ThemeComponent);
