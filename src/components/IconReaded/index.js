import React from 'react';
import PropTypes from 'prop-types';

import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';

const IconReaded = ({ isMe, isReaded}) =>
(
  isMe && (
    isReaded
      ? <img className='message__icon-readed' src={readedSvg} alt="readed icon" />
      : <img className='message__icon-readed' src={noReadedSvg} alt="readed icon" />
  )
) || null

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
