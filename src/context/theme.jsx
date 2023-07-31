import { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';

const GlobalContext = createContext();

export const StateProvider = ({ children }) => {
  const [activeTheme, setTheme] = useState('light');
  useEffect(() => {
    const themeFromStorage = localStorage.getItem('theme') ?? 'light';
    setTheme(themeFromStorage);
  }, []);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  const theme = themes[activeTheme] || themes.light;
  return (
    <GlobalContext.Provider
      value={{
        theme: {
          changeTheme,
          activeTheme,
        },
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(GlobalContext);
  const { changeTheme, activeTheme } = theme;
  return { changeTheme, activeTheme };
};
