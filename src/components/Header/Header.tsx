import BadComponent from '../BadComponent/BadComponent';
import styles from './Header.module.css';

const Header = () => (
  <>
    <div className={styles.header}>
      <div className="app-name">Simple React Application</div>
      <BadComponent />
    </div>
  </>
);

export default Header;
