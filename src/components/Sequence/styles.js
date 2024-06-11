import styled from 'styled-components';

export const SequenceContainer = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Char = styled.span`
  ${(props) => props.highlight && `
    color: red;
    font-weight: bold;
  `}
`;
