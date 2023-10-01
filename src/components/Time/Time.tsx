import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale'

import { ITimeProps } from './types'

export const Time = ({ date }: ITimeProps) => (
  <>
    {formatDistanceToNow(date, {
      addSuffix: true,
      locale: ru,
    })}
  </>
)
