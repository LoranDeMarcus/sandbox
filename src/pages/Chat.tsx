import React from 'react'
import { Message } from '@/components/Message'

export const Chat = () => {
  const user = {
    fullName: 'Alex',
  }
  return (
    <section>
      <Message
        user={user}
        avatar="https://sun9-72.userapi.com/impf/c623829/v623829616/39549/5XwuIPLvjiI.jpg?size=700x500&quality=96&sign=9bf6f01620cdc6c4df864d4980f577c9&type=album"
        message="Hello motherfucker"
        date="Sun Sep 23 2023 21:54:51 GMT+0400"
      />
      <Message
        user={user}
        avatar="https://sun9-77.userapi.com/impg/apP0EqR_WqGSq3x6BH_TRxboxrUnv6qalhNTfA/9tLmgIzErnw.jpg?size=1080x1080&quality=95&sign=edeff0733ea3ab642fbfa47093fcc9d0&type=album"
        message="Hi mate!"
        date="Sun Sep 24 2023 20:36:02 GMT+0400"
        isMe={true}
      />
    </section>
  )
}
