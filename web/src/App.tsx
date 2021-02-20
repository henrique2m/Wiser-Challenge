import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import Routes from './routers';

import GlobalStyles from './styles/globalStyles';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
};

export default App;
