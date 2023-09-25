import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import { IMessageProps } from './types'
import { ru } from 'date-fns/locale'
import classNames from 'classnames'
import { IconRead } from '@/components/IconRead'

import './styles.scss'

export const Message = ({ avatar, message, user, date, isMe, attachments }: IMessageProps) => {
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru,
  })

  const renderAttachment = (item: any) => {
    if (item.ext !== 'webm') {
      return (
        <div
          key={item._id}
          // onClick={() => setPreviewImage(item.url)}
          className="message__attachments-item">
          <div className="message__attachments-item-overlay">
            {/*<Icon type="eye" style={{ color: 'white', fontSize: 18 }} />*/}
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      )
    } else {
      // return <MessageAudio key={item._id} audioSrc={item.url} />
    }
  }

  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      // 'message--is-typing': isTyping,
      // 'message--is-audio': isAudio(attachments),
      // 'message--image': !isAudio(attachments) && attachments && attachments.length === 1 && !text,
    })}>
      <div className="message__content">
        {isMe &&
          <IconRead isMe={isMe} isRead={true} />
        }
        <div className="message__avatar">
          <img className="avatar" src={avatar} alt={`Avatar ${user?.fullName}`} />
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{message}</p>
          </div>

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => renderAttachment(item))}
            </div>
          )}

          <span className="message__date">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
