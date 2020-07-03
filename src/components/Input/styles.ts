import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;
  display: flex;
  padding: 16px;
  transition: 0.2s;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: none;
    color: #f4edeb;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
