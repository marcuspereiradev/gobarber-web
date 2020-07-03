import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png';

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

    a {
      color: #f4edeb;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: #666360;
      }
    }
  }

  a {
    align-items: center;
    color: #ff9000;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #d87708;
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;