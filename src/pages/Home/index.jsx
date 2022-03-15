import React from 'react';

import { Message, Dialogs } from 'components';

const Home = () => {
  return (
    <section className='home'>
      {/* <Dialogs
        userId={1}
        items={[
          {
            _id: 0,
            text: 'Привет дорогой мой друг. Я пишут тебе письмо.',
            created: new Date(),
            user: {
              _id: 0,
              fullname: 'Фёдор Достоевский',
              avatar: 'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1',
              isOnline: true
            },
          }, {
            _id: 1,
            text: 'Привет Федя!',
            created: new Date(2019, 3, 3),
            user: {
              _id: 0,
              fullname: 'Антон Чехов',
              avatar: 'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1',
              isOnline: false
            },
          }
        ]}
      /> */}

      <Message
        avatar={'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1'}
        date={new Date()}
        audio='https://notificationsounds.com/storage/sounds/file-sounds-1125-insight.mp3'
      />


      {/* <Message
        avatar={'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolor hic, maiores eaque perspiciatis suscipit officia? Iste ex, distinctio, ipsum expedita cumque quis corporis aliquid impedit explicabo ipsa cupiditate magni.'}
        date={new Date()}
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water,'
          },
          {
            filename: 'image2.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water,'
          },
          {
            filename: 'image3.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water,'
          }
        ]}
      />
      <Message
        avatar={'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolor hic, maiores eaque perspiciatis suscipit officia? Iste ex, distinctio, ipsum expedita cumque quis corporis aliquid impedit explicabo ipsa cupiditate magni.'}
        date={new Date()}
        isMe={true}
        isReaded={true}
      />
      <Message
        avatar={'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1'}
        isTyping
      />
      <Message
        avatar={'https://sun1-54.userapi.com/s/v1/ig2/F2o5SNDquPS_EkonSVlWf2ONJcJqVQH-UaHuaaHN1jnCwlsUGfaHwRd9YydBOIgF8NbUig6N0XlxIVzYe5JWoLIA.jpg?size=100x100&quality=95&crop=294,748,1207,1207&ava=1'}
        date={new Date()}
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water,'
          }
        ]}
      /> */}
      {/* <div className='dialogs'>
        <DialogItem
          user={{
            fullname: '',
            isOnline: false
          }}
          unreaded={0}
          isMe={true}
        />
        <DialogItem
          user={{
            fullname: '',
            isOnline: true
          }}
          unreaded={3}
        />
        <DialogItem
          user={{
            fullname: '',
            isOnline: false
          }}
          unreaded={10}
        /> */}
      {/* </div> */}
    </section>
  );
};

export default Home;
