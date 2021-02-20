import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.View`
  justify-content: center;
  background-color: #faf5ff;
  align-items: center;
  min-height: 357px;
  padding: 24px 18px 0 18px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  width: 139px;
  height: 64px;

  font-family: 'Montserrat-Regular';
  font-size: 24px;
  line-height: 32px;

  text-align: center;

  color: #383e71;
`;

export const Description = styled.Text`
  width: 255px;
  height: 20px;
  margin-top: 24px;
  font-family: 'Montserrat-Medium';
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;
`;

export const ForgotPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 212px;
  height: 40px;
`;

export const ForgotPasswordText = styled.Text`
  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
