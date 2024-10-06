import React, { useState } from "react";
import './chp1.css';

const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    
  ];

const Chapter1: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // State to track the current flashcard
    const [showAnswer, setShowAnswer] = useState(false); // State to track whether the answer is shown
  
    const handleNext = () => {
      setShowAnswer(false); // Reset answer visibility
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length); // Cycle through flashcards
    };
  
    const handleShowAnswer = () => {
      setShowAnswer(true); // Show the answer
    };
  
    return (
      <div className="flashcard-container">
        <h1>Flashcards</h1>
        <div className="flashcard">
          <div className="flashcard-question">
            <p>{flashcards[currentIndex].question}</p>
          </div>
          {showAnswer && (
            <div className="flashcard-answer">
              <p>{flashcards[currentIndex].answer}</p>
            </div>
          )}
        </div>
        <button onClick={handleShowAnswer}>Show Answer</button>
        <button onClick={handleNext}>Next Flashcard</button>
      </div>
    );
  };
  
  export default Chapter1;