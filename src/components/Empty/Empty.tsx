import React from 'react'

import EmptyIcon from '@/assets/icons/empty.svg'

import './styles.scss'

export const Empty = () => {
  return (
    <div className="empty">
      <div className="empty__image">
        <EmptyIcon />
      </div>
    </div>
  )
}
