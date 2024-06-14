import React, { useState, useEffect } from 'react';
import Sequence from '../components/Sequence';
import Timer from '../components/Timer';
import Feedback from '../components/Feedback';
import { AppContainer, Button } from './styles';
import GlobalStyle from '../styles/GlobalStyles';


const generateSequence = (length) => {
  const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let sequence = '';
  for (let i = 0; i < length; i++) {
    sequence += keys.charAt(Math.floor(Math.random() * keys.length));
  }
  return sequence;
};

const App = () => {
  const [sequence, setSequence] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); 
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    setSequence(generateSequence(10)); 
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setFeedback('Time\'s up! Game over.');
    }
  }, [timeLeft]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (sequence[currentIndex] === event.key.toUpperCase()) {
        setFeedback('Correct!');
        setCurrentIndex(currentIndex + 1);
        if (currentIndex + 1 === sequence.length) {
          setFeedback('You win!');
          setTimeLeft(0);
        }
      } else {
        setFeedback('Wrong key! Game over.');
        setTimeLeft(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, sequence]);

  const resetGame = () => {
    setSequence(generateSequence(10));
    setCurrentIndex(0);
    setTimeLeft(30);
    setFeedback('');
  };

  return (
    
    <AppContainer>
      <GlobalStyle />
      <h1>React Key Sequence Game</h1>
      <Sequence sequence={sequence} currentIndex={currentIndex} />
      <Timer timeLeft={timeLeft} />
      <Feedback feedback={feedback} />
      <Button onClick={resetGame}>Restart</Button>
    </AppContainer>
  );
};

export default App;
