import styles from './Page.module.css';

import { Outlet } from '@remix-run/react';
import StoreProvider from '../../StoreProvider';
import { PageData } from '../../types/PageData';
import CardListComponent from '../CardListComponent/CardListComponent';
import Flyout from '../Flyout/Flyout';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import SearchComponent from '../Search/SearchComponent';

const Page = ({ data, pageParams }: PageData) => {
  return (
    <StoreProvider>
      <SearchComponent pageParams={pageParams} />
      <PaginationComponent entriesCount={data.count} pageParams={pageParams} />
      <div className="container page">
        <CardListComponent data={data.results} pageParams={pageParams} />
        <div className={styles.details}>
          <Outlet />
        </div>
      </div>
      <Flyout />
    </StoreProvider>
  );
};

export default Page;
