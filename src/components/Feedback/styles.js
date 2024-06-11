import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  font-size: 20px;
  color: ${(props) => (props.feedback === 'Correct!' ? 'green' : 'red')};

  &:empty {
    display: none;
  }
`;
