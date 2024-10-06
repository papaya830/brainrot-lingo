import React, { useState } from 'react';
import './QuizPage.css'; // Import your CSS file for styling

// Sample brainrot words and definitions
const brainrotData = [
  { word: "Ate", definition: "Phrase used to show admiration or praise for someone who succeeded or performed well in something." },
  { word: "Aura", definition: "The impression you give people, your reputation or energy." },
  { word: "Alpha", definition: "A natural leader who takes charge in social situations." },
  { word: "Bestie", definition: "Short for 'best friend'." },
  { word: "Baked", definition: "When you are stoned out of your mind." },
  { word: "Based", definition: "An adjective used to describe someone who is confident, authentic, and true to themselves." },
];

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Chapter2: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null); // To track which word is selected
  const [correctMatches, setCorrectMatches] = useState<string[]>([]); // To track correct matches
  //const [incorrectMatches, setInorrectMatches] = useState<string[]>([]) 

  // Shuffle words and definitions for randomness
  const shuffledWords = shuffleArray([...brainrotData]);
  const shuffledDefinitions = shuffleArray([...brainrotData]);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  const handleDefinitionClick = (definition: string) => {
    if (!selectedWord) return; // If no word is selected, do nothing

    // Find the correct match
    const match = brainrotData.find((item) => item.word === selectedWord && item.definition === definition);

    if (match) {
      // If it's a correct match, add it to the correct matches array
      setCorrectMatches([...correctMatches, selectedWord]);
    } 

    // Clear the selected word after attempting the match
    setSelectedWord(null);
  };

  return (
    <div className="quiz-container">
      <h1>Match Brainrot Words with Definitions</h1>
      <div className="columns-container">
        <div className="words-column">
          <h2>Words</h2>
          {shuffledWords.map((item) => (
            <div
              key={item.word}
              className={`word-box ${selectedWord === item.word ? 'selected' : ''} ${correctMatches.includes(item.word) ? 'matched' : ''}`}
              onClick={() => handleWordClick(item.word)}
            >
              {item.word}
            </div>
          ))}
        </div>
        <div className="definitions-column">
          <h2>Definitions</h2>
          {shuffledDefinitions.map((item) => (
            <div
              key={item.definition}
              className={`definition-box ${correctMatches.includes(item.word) ? 'matched' : ''}`}
              onClick={() => handleDefinitionClick(item.definition)}
            >
              {item.definition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter2;
