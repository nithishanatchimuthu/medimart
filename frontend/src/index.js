// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './user';
import SignInSide from './LoginPage';
import Landingpage from './Landingpage';
import LoginPage from './LoginPage';
import SearchPage from './joblistings';
import CreateResume from './resume';

const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
ReactDOM.render(
  <Provider store={store}>
    <SignInSide />
    <Landingpage />
    <LoginPage/>
    <SearchPage/>
    <CreateResume/>
  </Provider>,
  document.getElementById('root')
);
