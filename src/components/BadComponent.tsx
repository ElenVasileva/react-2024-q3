import { useState } from 'react';
import ButtonComponent from './ButtonComponent/ButtonComponent';

const BadComponent = () => {
  const [showBadNode, setShowBadNode] = useState(false);

  const handleClick = () => {
    setShowBadNode(true);
  };

  if (showBadNode) throw new Error('Test error');
  return (
    <>
      <ButtonComponent onClick={handleClick}>Throw error</ButtonComponent>
    </>
  );
};

export default BadComponent;
