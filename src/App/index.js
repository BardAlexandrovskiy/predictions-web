import React from 'react';
import GlobalStyle from './styles';
import Router from '../router';
import store from '../store/index';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
        <GlobalStyle />
      </Provider>
    </>
  );
};

export default App;
