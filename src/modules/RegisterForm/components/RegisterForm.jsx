import React from 'react';

import { Link } from 'react-router-dom'

import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

import { Block, Button } from 'components';

import { validateFields } from 'utils/helpers';

const RegisterForm = (props) => {
  const success = false;
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
  return (
    <div className='auth__content'>
      <div className='auth__top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {
          !success
            ? (
                <Form
                  name="register-form"
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
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Ваше имя"
                      size="large"
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
                  <Form.Item

                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Повторите пароль"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    {isSubmitting && !isValid && <span>Ошибка!</span>}
                    <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit">Зарегистрироваться</Button>
                  </Form.Item>
                  <Link className='auth__register-link' to='/auth/login'>Войти в аккаунт</Link>
                </Form>
              )
            : (
                <div className='auth__register-success'>
                  <div><InfoCircleTwoTone /></div>
                  <h3>Подтвердите свой аккаунт</h3>
                  <p>На вашу почту отправлено письмо с сылкой на подтверждение аккаунт</p>
                </div>
              )
        }
      </Block>
    </div>
  );
};

export default RegisterForm;
