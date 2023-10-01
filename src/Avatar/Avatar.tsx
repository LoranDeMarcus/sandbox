import React from 'react'

import { IAvatarProps } from './types'

export const Avatar = ({ avatar, fullName, id }: IAvatarProps) => {
  if (avatar) {
    return <img alt={`Avatar ${fullName}`} className="avatar" src={avatar} />
  }
  return null
  // const { color, colorLighten } = generateAvatarFromHash(id)
  // const firstChar = fullName[0].toUpperCase()
  //
  // return (
  //   <div
  //     className="avatar avatar--symbol"
  //     style={{
  //       background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
  //     }}
  //   >
  //     {firstChar}
  //   </div>
  // )
}
