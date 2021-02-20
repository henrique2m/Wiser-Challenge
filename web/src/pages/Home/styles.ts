import styled from 'styled-components';

import BackgroundMobile from '../../assets/background-mobile.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2.8rem 4rem;

  background-image: linear-gradient(to bottom, transparent 0%, #130525 50%),
    url(${BackgroundMobile});
  background-repeat: no-repeat;
  background-size: 100%;

  > div {
    background: transparent;
  }
`;

export const Content = styled.main`
  width: 100%;
  min-height: 381px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #faf5ff;
  border-radius: 8px;
  padding: 0 28px;

  img {
    margin-bottom: 20px;
  }
`;
