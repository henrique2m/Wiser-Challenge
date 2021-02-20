import styled, { css } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

interface ContainerInputProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
  background: #faf5ff;
  border-radius: 10px;
`;

export const Label = styled.Text`
  width: 72px;
  height: 14px;
  font-family: 'Montserrat-Regular';
  margin-left: 16px;
  margin-bottom: 8px;
  font-size: 10px;
  color: #383e71;
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #faf5ff;
  border-radius: 10px;
  border-width: 2px;
  border-color: #989fdb;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff377f;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #383e71;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #989fdb;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export const Error = styled.Text`
  color: #ff377f;
  font-size: 12px;
  line-height: 36px;
  margin-left: 16px;
`;

export const Icon = styled(Feather)`
  margin-right: 8px;
`;
