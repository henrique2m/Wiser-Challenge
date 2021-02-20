import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <LinearGradient
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={['#9D25B0', '#383E71']}
      style={styles.linearGradiente}
    >
      <ButtonText>{children}</ButtonText>
    </LinearGradient>
  </Container>
);

const styles = StyleSheet.create({
  linearGradiente: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
