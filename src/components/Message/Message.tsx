import React from 'react'
import { formatDistanceToNow } from 'date-fns'

import { IMessageProps } from './types'
import { ru } from 'date-fns/locale'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import * as s from './styles'

export const Message = ({ avatar, message, user, date, isMe }: IMessageProps) => {
  const formattedDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ru,
  })

  return (
    <div className={`${s.rootCommon} ${isMe ? s.rootIsMe : ''}`}>
      {isMe &&
        <DoneAllIcon className="absolute left-0" sx={{ fontSize: 'small', color: '#0c8fe4' }} />
      }
      <div className="w-8 h-8 mb-6 rounded-full shrink-0">
        <img className="rounded-full w-8 h-8" src={avatar}
             alt={`Avatar ${user?.fullName}`} />
      </div>
      <div>
        <div
          className={`${s.bubbleCommon} ${isMe ? s.bubbleIsMe : ''}`}
        >
          <p className={`${isMe ? 'text-black' : 'text-white'}`}>{message}</p>
        </div>
        <span className="text-xs opacity-40">{formattedDate}</span>
      </div>
    </div>
  )
}
