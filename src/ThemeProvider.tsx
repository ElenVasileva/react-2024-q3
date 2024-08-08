'use client';

import { ReactNode, useState } from 'react';
import { ThemeContext } from './themes/ThemeContext';
import Header from './components/Header/Header';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  const className = `main-container ${theme}`;

  return (
    <div className={className}>
      <div>
        <ThemeContext.Provider value={theme}>
          <Header />
          <label className="theme-label">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => {
                setTheme(e.target.checked ? 'dark' : 'light');
              }}
            />
            Use dark mode
          </label>
          {children}
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default ThemeProvider;
