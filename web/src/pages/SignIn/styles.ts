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
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin-top: 3rem;
    p {
      width: 212px;
      height: 40px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
      a {
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        text-decoration: none;
        span {
          text-decoration: underline;
          margin-left: 4px;
        }
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  min-height: 381px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: #faf5ff;
  border-radius: 8px;
  padding: 0 28px;
  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
    h1 {
      width: 10rem;
      height: 6.4rem;
      text-align: center;
      font-size: 24px;
      line-height: 32px;
      color: #383e71;
    }
  }
  > span {
    font-weight: 600;
    font-size: 12px;
    color: #989fdb;
    text-align: center;
    margin-bottom: 26px;
  }
  form {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 30px;
      margin-bottom: -24px;
    }
  }
`;
