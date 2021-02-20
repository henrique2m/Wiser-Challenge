import styled from 'styled-components';

import BackgroundMobile from '../../assets/background-mobile.png';
import BackgroundTablet from '../../assets/background-tablet.png';
import BackgroundDesktop from '../../assets/background-desktop.png';

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

  > aside {
    display: none;
  }

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

  @media (min-width: 668px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #faf5ff;
    padding: 0;

    > aside {
      background-image: linear-gradient(to bottom, transparent 0%, #130525 90%),
        url(${BackgroundTablet});
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      height: 100%;
      width: 327px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: #faf5ff;
      flex: 1;
      height: 100%;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 4rem;
      margin-top: 24px;

      p {
        width: 212px;
        height: 40px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #989fdb;

        a {
          font-size: 14px;
          line-height: 20px;
          color: #9d25b0;
          text-decoration: none;

          span {
            text-decoration: underline;
            margin-left: 4px;
          }
        }
      }
    }
  }

  @media (min-width: 1172px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #faf5ff;
    padding: 0;

    > aside {
      background-image: linear-gradient(to bottom, transparent 0%, #130525 90%),
        url(${BackgroundDesktop});
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      height: 100%;
      width: 765px;
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

  @media (min-width: 668px) {
    width: 297px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #faf5ff;
    border-radius: 8px;
    padding: 0;

    header {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: left;
      margin-top: 26px;

      h1 {
        width: 231px;
        text-align: left;
        font-size: 40px;
        line-height: 48px;
        color: #383e71;
      }
    }

    > span {
      width: 222px;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #989fdb;
      text-align: left;
      margin-top: 32px;
      margin-left: -68px;
      margin-bottom: 32px;
    }

    form {
      button {
        margin-top: 24px;
        margin-bottom: 0;
      }
    }
  }
`;
