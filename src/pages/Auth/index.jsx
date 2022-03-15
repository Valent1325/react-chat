import React from 'react';

import { Outlet } from 'react-router-dom';

import './Auth.scss';

const Auth = () => (
  <section className='auth'>
    <div className='auth__content'>
      <Outlet />
    </div>
  </section>
);

export default Auth;
