import React from 'react';
import classNames from 'classnames';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';

import { Time, IconReaded } from 'components';

import './DialogItem.scss';

const DialogItem = ({ user, unreaded, created, text, isMe }) => {

  const getAvatar = avatar => {
    if (avatar) {
      return <img src={avatar} />
    } else {
      // todo: make avatar
      return null;
    }
  }

  const getMessageTime = created => {
    if(isToday(created)) {
      return format(created, 'HH:mm');
    } else {
      return format(created, 'dd.MM.yyyy');
    }
  }

  return (
    <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
      <div className='dialogs__item-avatar'>
        {
          getAvatar(user.avatar)
        }
      </div>
      <div className='dialogs__item-info'>
        <div className='dialogs__item-info-top'>
          <b>Фёдор Достоевский</b>
          <span>
            {/* <Time date={message.created} /> */}
            {getMessageTime(created)}
          </span>
        </div>
        <div className='dialogs__item-info-bottom'>
          <p>
            {text}
          </p>
          <IconReaded isMe={isMe} isReaded={false} />
          {unreaded > 0 && <div className='dialogs__item-info-bottom-count'>{unreaded > 9 ? '+9' : unreaded}</div>}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
