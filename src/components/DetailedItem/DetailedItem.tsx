import styles from './DetailedItem.module.css';

import Person from '../../types/Person';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import PageParams from '../../types/PageParams';
import { createUrl } from '../../helpers/helper';

const DetailedItem = ({ person, pageParams }: { person: Person; pageParams: PageParams }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className={`${styles.details} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <div className={styles.header}>
          {person.name}
          <Link href={createUrl({ ...pageParams, selectedCard: undefined })}>x</Link>
        </div>
        <div>Height: {person.height}</div>
        <div>Weight: {person.mass}</div>
        <div>Gender: {person.gender}</div>
        <div>Hair color: {person.hair_color}</div>
        <div>Skin color: {person.skin_color}</div>
      </div>
    </>
  );
};

export default DetailedItem;
