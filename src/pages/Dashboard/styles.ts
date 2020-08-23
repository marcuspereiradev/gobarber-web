import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const appearFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-300px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  animation: ${appearFromUp} 1s;

  h1 {
    font-size: 6em;
  }
`;
