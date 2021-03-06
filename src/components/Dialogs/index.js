import React from 'react';
import orderBy from 'lodash/orderBy';

import { DialogItem } from 'components';

const Dialogs = ({ items, userId }) => {
  return (
    <div className='dialogs'>
      {
        orderBy(items, ['created'], ['desc']).map(item => (
          <DialogItem
            key={item._id}
            unreaded={0}
            isMe={item.user._id === userId}
            {...item}
          />
        ))
      }
    </div>
  );
};

export default Dialogs;
