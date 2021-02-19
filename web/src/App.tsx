import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routers';

import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
