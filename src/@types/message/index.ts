import { IUser } from '@/@types/user'

export interface IAttachment {
  id: number
  ext?: 'webm'
  fileName: string
  url: string
}

export interface IMessage {
  id: number
  text: string
  attachments: Array<IAttachment>
  user: IUser
  createdAt: Date
}
