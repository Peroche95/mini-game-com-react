import React from 'react';
import { FeedbackContainer } from './styles';

const Feedback = ({ feedback }) => {
  return (
    <FeedbackContainer feedback={feedback}>
      {feedback}
    </FeedbackContainer>
  );
};

export default Feedback;
