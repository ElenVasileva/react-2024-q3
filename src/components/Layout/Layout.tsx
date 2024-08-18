import { ReactNode } from 'react';
import Header from '../Header/Header';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default Layout;
