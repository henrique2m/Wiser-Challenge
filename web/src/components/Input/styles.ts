import styled, { css } from 'styled-components';

interface ContainerInputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 12px;
    line-height: 36px;
    margin-left: 16px;
    color: #383e71;
  }

  > span {
    color: #ff377f;
    font-size: 12px;
    line-height: 36px;
    margin-left: 16px;
  }
`;

export const ContainerInput = styled.div<ContainerInputProps>`
  width: 256px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff377f;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #383e71;
      border-color: #383e71;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #383e71;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 12px;
    line-height: 48px;
    color: #383e71;

    &::placeholder {
      color: #989fdb;
    }
  }

  svg {
    margin-left: 6px;
  }

  @media (min-width: 668px) and (max-width: 801px) {
    width: 297px;
  }
`;
