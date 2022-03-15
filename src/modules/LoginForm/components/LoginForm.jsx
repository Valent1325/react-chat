import React from 'react';

import { Link } from 'react-router-dom'

import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Block, Button } from 'components';

import { validateFields } from 'utils/helpers';

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;
  console.log('isSubmitting', isSubmitting);
  console.log('isValid', isValid);
  return (
    <div className='auth__content'>
      <div className='auth__top'>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="login-form"
          className="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item
            validateStatus={validateFields("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-Mail"
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateFields("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Войти
            </Button>
          </Form.Item>
          <Link className='auth__register-link' to='/auth/register'>Зарегистрироваться</Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
