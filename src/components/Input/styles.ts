import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

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

export const Error = styled.div`
  display: flex;
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;

    &:hover + div span {
      opacity: 1;
    }
  }

  span {
    background: #c53030;
    color: #fff;
    opacity: 0;
    transition: 0.4s ease-in-out;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
