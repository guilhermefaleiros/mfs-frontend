import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
  AnimationContainer,
  FakeLoginInLink,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});

      await signIn({
        email: data.email.toLowerCase(),
        password: data.password,
      });
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>
            <Input
              type="text"
              icon={FiMail}
              name="email"
              placeholder="E-mail"
            />

            <Input
              type="password"
              icon={FiLock}
              name="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
