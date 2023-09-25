import React from 'react'
import classNames from 'classnames'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import CheckIcon from '@mui/icons-material/Check'

import { IIconReadProps } from './types'

export const IconRead = ({ isMe, isRead }: IIconReadProps) => {
  if (!isMe) return null

  if (isRead) {
    return (
      <DoneAllIcon
        className="message__icon-read"
        sx={{ fontSize: 'small' }}
      />

    )
  }

  return (
    <CheckIcon
      className={classNames('message__icon-read', {
        'message__icon-read--no': isRead,
      })}
      sx={{ fontSize: 'small' }}
    />
  )
}
