import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import { Link } from 'react-router-dom'

import { IMessage } from '@/@types/message'
import { IconRead } from '@/components/IconRead'
import { Avatar } from '@/Avatar'

import { IDialogItemProps } from './types'

const getMessageTime = (createdAt: Date) => {
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm')
  }
  return format(createdAt, 'DD.MM.YYYY')
}

const renderLastMessage = (message: IMessage, userId: string) => {
  let text = ''
  text = !message.text && message.attachments.length ? 'прикрепленный файл' : message.text

  return `${message.user.id === userId ? 'Вы: ' : ''}${text}`
}

export const DialogItem = ({
  id,
  unread,
  created_at,
  text,
  isMe,
  currentDialogId,
  partner,
  lastMessage,
  userId,
}: IDialogItemProps) => (
  <Link to={`/dialog/${id}`}>
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': partner.isOnline,
        'dialogs__item--selected': currentDialogId === id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullName}</b>
          <span>{getMessageTime(lastMessage.createdAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{renderLastMessage(lastMessage, userId)}</p>
          {isMe && <IconRead isMe={isMe} isRead={lastMessage.read} />}
          {lastMessage.unread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.unread > 9 ? '+9' : lastMessage.unread}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
)
