import styles from './Link.module.css';

import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import { NavLink } from '@remix-run/react/dist/components';

const LinkComponent = ({ children, className, href }: { children: React.ReactNode; className?: string | undefined; href: string }) => {
  const theme = useContext(ThemeContext);

  const linkClassName = `${styles.link} ${className || ''} ${theme == 'dark' ? styles.dark : styles.light}`;
  return (
    <NavLink to={href} className={linkClassName}>
      {children}
    </NavLink>
  );
};
export default LinkComponent;
