import { useState } from 'react';

const BadComponent = () => {
  const [showBadNode, setShowBadNode] = useState(false);

  const handleClick = () => {
    setShowBadNode(true);
  };

  if (showBadNode) throw new Error('Test error');
  return (
    <>
      <button onClick={handleClick}>Throw error</button>
    </>
  );
};

export default BadComponent;
