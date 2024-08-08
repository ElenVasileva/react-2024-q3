import { ReactNode } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import ThemeProvider from '../../ThemeProvider';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ErrorBoundary hasError={false}>
        <ThemeProvider>{children}</ThemeProvider>
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
