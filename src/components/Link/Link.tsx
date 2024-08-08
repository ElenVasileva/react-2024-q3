import styles from './Link.module.css';

import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';
import Link from 'next/link';

const LinkComponent = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string | undefined;
  href: string;
}) => {
  const theme = useContext(ThemeContext);

  const linkClassName = `${styles.link} ${className || ''} ${theme == 'dark' ? styles.dark : styles.light}`;
  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
};
export default LinkComponent;
