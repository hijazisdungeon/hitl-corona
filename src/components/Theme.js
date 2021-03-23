import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import * as themes from '~/config/themes';

const { dark, light } = themes;

const themeKey = '@CovidAgora:Theme';
const themeNames = Object.keys(themes);

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
        const currentTheme = themeNames[themeName];

        setTheme(currentTheme || light);
      }
    }

    resolveTheme();
    window.addEventListener('storage', resolveTheme);

    // Só precisa ser executado 1 vez
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
