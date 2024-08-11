import { useState } from 'react';
import Button from './../Button/Button';

const BadComponent = () => {
  const [showBadNode, setShowBadNode] = useState(false);

  const handleClick = () => {
    setShowBadNode(true);
  };

  if (showBadNode) throw new Error('Test error');
  return (
    <>
      <Button onClick={handleClick}>Throw error</Button>
    </>
  );
};

export default BadComponent;
