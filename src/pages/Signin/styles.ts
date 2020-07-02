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

    input {
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
      padding: 16px;
      transition: 0.2s;
      width: 100%;

      & + input {
        margin-top: 8px;
      }

      &:focus {
        background: #f4edeb;
      }
    }

    button {
      background: #ff9000;
      border: 0;
      border-radius: 10px;
      color: #312e38;
      font-weight: 500;
      height: 56px;
      margin-top: 16px;
      padding: 0 16px;
      width: 100%;
      transition: 0.2s;

      &:hover {
        background: #d87708;
      }
    }

    a {
      color: #f4edeb;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: #d1ccca;
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
