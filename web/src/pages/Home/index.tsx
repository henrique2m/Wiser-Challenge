import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { exit } from '../../store/ducks/auth/actions';
import { Container, Content } from './styles';
import logoWiser from '../../assets/logo-wiser.png';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const userLogout = useCallback(() => {
    dispatch(exit());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Content>
          <img src={logoWiser} alt="Wiser" />

          <Button type="button" onClick={userLogout}>
            SAIR
          </Button>
        </Content>
      </div>
    </Container>
  );
};

export default Home;
