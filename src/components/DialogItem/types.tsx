import { IMessage } from '@/@types/message'
import { IUser } from '@/@types/user'

export interface IDialogItemProps {
  id: number
  unread: any
  created_at: any
  text: string
  isMe?: boolean
  currentDialogId: any
  partner: IUser
  lastMessage: IMessage
  userId: any
}
