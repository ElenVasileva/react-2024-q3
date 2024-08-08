import { ReactNode, useState } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');

  const className = `main-container ${theme}`;

  return (
    <>
      <div className={className}>
        <div>
          <ErrorBoundary hasError={false}>
            <ThemeContext.Provider value={theme}>
              <Header />
              <label>
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
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default Layout;
