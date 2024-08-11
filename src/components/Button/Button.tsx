import styles from './Button.module.css';

import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';

const Button = ({ children, className, onClick }: { children: React.ReactNode; className?: string | undefined; onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  const theme = useContext(ThemeContext);

  const buttonClass = `${styles.button} ${className || ''} ${theme == 'dark' ? styles.dark : styles.light}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
