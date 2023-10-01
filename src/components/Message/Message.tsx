import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import classNames from 'classnames'
import data from '@emoji-mart/data'
import EmojiPicker from '@emoji-mart/react'
import reactStringReplace from 'react-string-replace'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { IconRead } from '@/components/IconRead'
import { isAudio } from '@/utils/isAudio'
import { IAttachment } from '@/@types/message'

import { MessageAudio } from './MessageAudio'
import { IMessageProps } from './types'

import './styles.scss'

export const Message = ({
  avatar,
  text,
  user,
  date,
  isMe,
  attachments,
  isTyping,
  setPreviewImage,
}: IMessageProps) => {
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru,
  })

  const renderAttachment = (item: IAttachment) => {
    if (item.ext !== 'webm') {
      return (
        <div
          className="message__attachments-item"
          key={item.id}
          onClick={() => setPreviewImage(item.url)}
        >
          <div className="message__attachments-item-overlay">
            <VisibilityIcon style={{ color: 'white', fontSize: 18 }} />
          </div>

          <img alt={item.fileName} src={item.url} />
        </div>
      )
    }
    return <MessageAudio audioSrc={item.url} key={item.id} />
  }

  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--is-audio': isAudio(attachments),
        'message--image': !isAudio(attachments) && attachments && attachments.length === 1 && !text,
      })}
    >
      <div className="message__content">
        {isMe && <IconRead isMe={isMe} isRead />}
        <div className="message__avatar">
          <img alt={`Avatar ${user?.fullName}`} className="avatar" src={avatar} />
        </div>
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && (
                <p className="message__text">
                  {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                    <EmojiPicker data={data} emoji={match} key={i} set="apple" size={16} />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {/* {false && <MessageAudio audioSrc={null} />} */}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => renderAttachment(item))}
            </div>
          )}

          <span className="message__date">{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
