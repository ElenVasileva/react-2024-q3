import styles from './Flyout.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { unselectAll } from '../../features/checkedItemsSlice';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import Person from '../../types/Person';
import { createFileContent } from '../../helpers/helper';

const Flyout = () => {
  const theme = useContext(ThemeContext);
  const checkedItems = useSelector((state: RootState) => state.checkedItems.value);
  const dispatch = useDispatch();

  const createFile = (checkedItems: Person[]) => {
    return URL.createObjectURL(createFileContent(checkedItems));
  };

  return (
    <div className={styles.flyout}>
      <div
        className={`${checkedItems.length ? styles.shown : ''} ${styles.toShow}  ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <div className={styles.content}>
          {checkedItems.length} items selected
          <Button
            className={styles.margin30}
            onClick={() => {
              dispatch(unselectAll());
            }}
          >
            Unselect all
          </Button>
          <a
            href={createFile(checkedItems)}
            download={`${checkedItems.length}_persons.csv`}
            className={`${styles.button} ${theme === 'dark' ? styles.buttonDark : styles.buttonLight}`}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
export default Flyout;
