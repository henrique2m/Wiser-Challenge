import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { loadRequest } from '../../store/ducks/auth/actions';
import { AuthUserState } from '../../store/ducks/auth/types';

import getValidationsErros from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

interface AuthUser {
  AuthUser: AuthUserState | undefined;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();

  const { AuthUser } = useSelector((state: AuthUser) => state);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Informe o e-mail de cadastro.')
            .email('Digite um e-mail válido.'),
          password: Yup.string().required('Digite sua senha.'),
        });

        await schema.validate(data, { abortEarly: false });

        dispatch(loadRequest(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErros(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <div>
        <Content>
          <header>
            <h1> Olá, seja bem-vindo! </h1>
          </header>

          <span>Para acessar a plataforma, faça seu login.</span>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              label="E-MAIL"
              placeholder="user.name@mail.com"
            />
            <Input
              name="password"
              label="SENHA"
              type="password"
              placeholder="*******"
            />

            <Button type="submit" loading={!!AuthUser?.loading}>
              ENTRAR
            </Button>
          </Form>
        </Content>

        <footer>
          <p>
            Esqueceu seu login ou senha? Clique
            <Link to="/">
              <span>aqui</span>
            </Link>
          </p>
        </footer>
      </div>
    </Container>
  );
};

export default SignIn;
