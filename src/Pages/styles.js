import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #fff;  
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 300px;

  padding: 40px; 
  border: 1px solid #ccc; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: absolute; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
`;



export const Button = styled.button`
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
border: none;
border-radius: 5px;
background-color: #007bff;
color: white;
transition: background-color 0.3s ease;

&:hover {
  background-color: #0056b3;
}
`;
