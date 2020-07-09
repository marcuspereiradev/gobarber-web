import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background: #ff9000;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.875em;
    font-weight: 500;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-56%);
    color: #312e38;

    &::before {
      content: '';
      border-color: #ff9000 transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-56%);
    }
  }
`;
