// Chapter1.tsx
import React, { useState, useEffect } from "react";
import Flashcard from './Flashcard'; // Ensure this path is correct
import './chp1.css';

const allFlashcards = [
  {
    term: "Aura",
    definition: "Aura is the impression you give people. It's reputation, the sensation people have when you walk by. Some individuals have a noticeable aura, and others are taken for granted."
  },
  {
    term: "Based",
    definition: "An adjective used to describe someone who is confident, authentic, and unapologetically true to themselves."
  },
  {
    term: "Alpha",
    definition: "Often seen as a natural leader who takes charge in social situations, commands respect, and influences others."
  },
  {
    term: "Zest/Zesty",
    definition: "Somebody who looks and acts like they could be homosexual."
  },
  {
    term: "Chat",
    definition: "A term used by streamers to refer to their live audience, which they communicate with through a chat interface."
  },
  {
    term: "Cap",
    definition: "Cap means a lie."
  },
  // Add more flashcards as needed
];

const Chapter1: React.FC = () => {
  const [selectedFlashcards, setSelectedFlashcards] = useState<any[]>([]); // State to track selected flashcards
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current flashcard

  // Function to select random flashcards
  const selectRandomFlashcards = () => {
    const shuffled = allFlashcards.sort(() => 0.5 - Math.random());
    setSelectedFlashcards(shuffled.slice(0, 6)); // Select 6 random flashcards
  };

  useEffect(() => {
    selectRandomFlashcards(); // Select random flashcards on component mount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFlashcards.length); // Cycle through selected flashcards
  };

  return (
    <div className="flashcard-container">
      <h1>Flashcards</h1>
      {selectedFlashcards.length > 0 && (
        <Flashcard
          term={selectedFlashcards[currentIndex].term}
          definition={selectedFlashcards[currentIndex].definition}
        />
      )}
      <button onClick={handleNext}>Next Flashcard</button>
    </div>
  );
};

export default Chapter1;