import { IAttachment } from '@/@types/message'

export const isAudio = (attachments?: Array<IAttachment>) => {
  if (!attachments) {
    return null
  }
  const file = attachments[0]
  return attachments.length && file.ext === 'webm'
}
