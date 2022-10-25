import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px 18px;
  gap: 10px;

  width: 300px;
  height: 56px;
  background: linear-gradient(97.74deg, #cef458 44.02%, #ae29dd 178.75%);
  border-radius: 70px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
