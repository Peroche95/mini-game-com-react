import React from 'react';
import { SequenceContainer, Char } from './styles';

const Sequence = ({ sequence, currentIndex }) => {
  return (
    <SequenceContainer>
      {sequence.split('').map((char, index) => (
        <Char key={index} highlight={index === currentIndex}>
          {char}
        </Char>
      ))}
    </SequenceContainer>
  );
};

export default Sequence;
