import React, { useCallback, useRef } from 'react';
import {
  Platform,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  FormContainer,
  Description,
} from './styles';
import getValidationsErros from '../../utils/getValidationErrors';
import ImageBackground from '../../assets/background-mobile.png';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const userAuth = { email: 'wiser@wisereducacao.com', password: '12345678' };

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Informe o e-mail de cadastro.')
            .email('Digite um e-mail válido.'),
          password: Yup.string().required('Informe sua senha.'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        if (userAuth.email === email && userAuth.password === password) {
          Alert.alert('Login', 'Login realizado com sucesso! :)');
        } else {
          Alert.alert(
            'Erro na autenticação',
            'Ocorreu um erro ao fazer login, cheque suas credenciais. :(',
          );
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErros(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [userAuth.password, userAuth.email],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container source={ImageBackground}>
          <LinearGradient
            colors={['rgba(105,57,153,0)', 'rgba(19,5,37,1)']}
            style={styles.linearGradiente}
          >
            <>
              <FormContainer>
                <View>
                  <View>
                    <Title>Olá, seja bem-vindo!</Title>
                  </View>
                </View>

                <View>
                  <Description>
                    Para acessar a plataforma, faça seu login.
                  </Description>
                </View>

                <Form ref={formRef} onSubmit={handleSignIn} style={styles.form}>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="email"
                    label="E-MAIL"
                    icon="x"
                    placeholder="user.name@mail.com"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus();
                    }}
                  />
                  <Input
                    ref={passwordInputRef}
                    secureTextEntry
                    name="password"
                    icon="x"
                    placeholder="*******"
                    label="SENHA"
                    returnKeyType="send"
                    onSubmitEditing={() => {
                      formRef.current?.submitForm();
                    }}
                  />

                  <Button
                    onPress={() => {
                      formRef.current?.submitForm();
                    }}
                    style={styles.button}
                  >
                    ENTRAR
                  </Button>
                </Form>
              </FormContainer>

              <ForgotPassword onPress={() => ({})}>
                <ForgotPasswordText>
                  Esqueceu seu login ou senha? Clique{' '}
                  <Text style={styles.link}>aqui</Text>
                </ForgotPasswordText>
              </ForgotPassword>
            </>
          </LinearGradient>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  linearGradiente: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },

  form: {
    justifyContent: 'center',
    backgroundColor: '#faf5ff',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  button: {
    marginBottom: -24,
  },

  link: {
    textDecorationLine: 'underline',
  },
});

export default SignIn;
