export interface IUser {
  fullName?: string
}

export interface IMessageProps {
  avatar: string
  message: string
  date: string
  user: IUser
  isMe?: boolean
}
