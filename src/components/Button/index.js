import React from 'react';
import PropTypes from 'prop-types';

import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

import './Button.scss';

const Button = ({children, ...props}) => (
  <BaseButton
    {...props}
    className={classNames('button', props.classNames, {'button--large' : props.size === 'large'})}
  >
    {children}
  </BaseButton>
);

Button.propTypes = {
  classNames: PropTypes.string
}

export default Button;
