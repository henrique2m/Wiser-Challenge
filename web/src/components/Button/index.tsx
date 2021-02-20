import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  size?: 'small' | 'big';
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  size = 'small',
  ...rest
}) => (
  <Container type="button" {...rest} size={size}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
