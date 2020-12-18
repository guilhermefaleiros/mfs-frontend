import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';
import { Link } from 'react-router-dom';
import signInBackground from '../../../assets/images/userLogin.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #f0f0f7;
  color: #ff872c;
`;

export const Background = styled.div`
  flex: 1;
  background-size: 70%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  border-right: 1px dotted #ff872c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  img {
    width: 70%;
    height: 70%;
  }
  form {
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #ff872c;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;
      &:hover {
        color: ${shade(0.2, '#FF872C')};
      }
    }
  }
  a {
    color: #ff872c;
    display: block;
    font-weight: 700;
    margin-top: 24px;
    text-decoration: none;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#FF872C')};
    }
    svg {
      margin-right: 16px;
    }
  }
`;

export const FakeLoginInLink = styled(Link)`
  background: #ff872c;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #ffff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  color: #fff !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  &:hover {
    background: ${shade(0.2, '#FF872C')};
  }
`;
