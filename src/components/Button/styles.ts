import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #04d361;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #ffff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#04d361')};
  }
`;
