import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffff;
  border-radius: 10px;
  border: 2px solid #ffff;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff872c;
      border-color: #ff872c;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff872c;
      border-color: #ff872c;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #FF872C;
    &::placeholder {
      color: #666360;
    }
    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
