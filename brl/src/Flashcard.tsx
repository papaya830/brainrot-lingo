// Flashcard.tsx
import React, { useState } from 'react';
import './Flashcard.css'; // Ensure you have this file for styling

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3>{term}</h3>
        </div>
        <div className="flashcard-back">
          <p>{definition}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
