import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, IconReaded } from 'components';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import './Message.scss';

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio
}) => {

  const [play, setPlay] = useState(false);

  const audioElem = useRef(null);

  const tooglePlay = () => {
    audioElem.current.volume='0.1';
    audioElem.current.play();
  }

  return (
    <div className={classNames('message',
      {
        'message--isme': isMe,
        'message--typing': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message--audio': audio
      }
    )}>
      <div className='message__content'>
        <div className='message__avatar'>
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className='message__info'>
          {
            (audio || text || isTyping) && (
              <div className='message__bubble'>
                <IconReaded isMe={isMe} isReaded={isReaded} />
                {text && <p className='message__text'>{text}</p>}
                {isTyping && (
                  <div className='message__typing'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                )}
                {
                  audio && (
                    <div className='message__audio'>
                      <div className='message__audio-progress'></div>
                      <div className='message__audio-info'>
                        <audio ref={audioElem} src={audio} preload='auto' />
                        <div className='message__audio-btn'>
                          <button onClick={tooglePlay}>
                            {
                              play ? <img src={pauseSvg} alt='pause svg' /> : <img src={playSvg} alt='play svg' />
                            }
                          </button>
                        </div>
                        <div className='message__audio-wave'>
                          <img src={waveSvg} alt='wave svg' />
                        </div>
                        <span className='message__audio-duration'>
                          00:19
                        </span>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }

          {
            attachments && (
              <div className='message__attachments'>
                {
                  attachments.map(item => (
                    <div key={item.filename} className='message__attachments-item'>
                      <img src={item.url} alt={item.filename} />
                    </div>
                  ))
                }
              </div>
            )
          }
          { date && (
            <span className='message__date'>
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool
};

export default Message;
