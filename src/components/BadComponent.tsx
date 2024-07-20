import { useContext, useState } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const BadComponent = () => {
  const theme = useContext(ThemeContext);
  const buttonClass = 'button-' + theme;

  const [showBadNode, setShowBadNode] = useState(false);

  const handleClick = () => {
    setShowBadNode(true);
  };

  if (showBadNode) throw new Error('Test error');
  return (
    <>
      <button className={buttonClass} onClick={handleClick}>
        Throw error
      </button>
    </>
  );
};

export default BadComponent;
