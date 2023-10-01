import { IAttachment } from '@/@types/message'

export interface IUser {
  fullName?: string
}

export interface IMessageProps {
  avatar: string
  text: string
  date: string
  user: IUser
  isMe?: boolean
  attachments?: Array<IAttachment>
  isTyping?: boolean
  setPreviewImage: (value: string) => void
}

export interface IMessageAudioProps {
  audioSrc: string
}
