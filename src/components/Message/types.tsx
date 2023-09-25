export interface IUser {
  fullName?: string
}

interface IAttachment {
  fileName: string
  url: string
}

export interface IMessageProps {
  avatar: string
  message: string
  date: string
  user: IUser
  isMe?: boolean
  attachments?: Array<IAttachment>
}
