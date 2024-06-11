import React from 'react';
import { TimerContainer } from './styles';

const Timer = ({ timeLeft }) => {
  return (
    <TimerContainer>
      Time left: {timeLeft}s
    </TimerContainer>
  );
};

export default Timer;
