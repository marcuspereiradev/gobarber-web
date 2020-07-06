import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  place-content: center;
  width: 100%;

  form {
    text-align: center;
    margin: 80px 0;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    align-items: center;
    color: #f4edeb;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #666360;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
