import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './index.scss';

import App from './App';

import { Auth, Home } from 'pages';

import { LoginForm, RegisterForm } from 'modules';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to='auth' />} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<Navigate to="login" />} />
            <Route path='login'  element={<LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
          </Route>
          <Route path="home" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
