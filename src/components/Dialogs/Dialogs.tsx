import React from 'react'
import orderBy from 'lodash/orderBy'
import { Autocomplete, TextField } from '@mui/material'

import { DialogItem } from '@/components/DialogItem'
import { Empty } from '@/components/Empty'

import './styles.scss'

import { IDialogsProps } from './types'

export const Dialogs = ({
  items,
  userId,
  onSearch,
  inputValue,
  currentDialogId,
}: IDialogsProps) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Autocomplete
        freeSolo
        options={[].map((option) => option)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          currentDialogId={currentDialogId}
          isMe={item.author._id === userId}
          key={item._id}
          userId={userId}
          {...item}
        />
      ))
    ) : (
      <Empty />
    )}
  </div>
)
