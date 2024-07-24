import './ButtonComponent.css';

import { useContext } from 'react';
import { ThemeContext } from '../../themes/ThemeContext';

const ButtonComponent = ({ children, className, onClick }: { children: React.ReactNode; className?: string | undefined; onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined }) => {
  const theme = useContext(ThemeContext);

  const buttonClass = `${className || ''} button-${theme}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
export default ButtonComponent;
