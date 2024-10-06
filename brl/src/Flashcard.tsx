// Flashcard.tsx
import React, { useState } from 'react';
import './Flashcard.css'; // Ensure you have this file for styling

interface FlashcardProps {
  term: string;
  definition: string;
  image?: string; // Accept image as a prop
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition, image }) => {
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
          {image && (
            <div className="hover-image-container">
              <img src={image} alt={term} className="hover-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
