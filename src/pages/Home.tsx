import React from 'react'

import { Message } from '@/components/Message'

const avatar =
  'https://sun9-72.userapi.com/impf/c623829/v623829616/39549/5XwuIPLvjiI.jpg?size=700x500&quality=96&sign=9bf6f01620cdc6c4df864d4980f577c9&type=album'
const myAvatar =
  'https://sun9-77.userapi.com/impg/apP0EqR_WqGSq3x6BH_TRxboxrUnv6qalhNTfA/9tLmgIzErnw.jpg?size=1080x1080&quality=95&sign=edeff0733ea3ab642fbfa47093fcc9d0&type=album'

export const Home = () => {
  const user = {
    fullName: 'Alex',
  }

  return (
    <section>
      <Message attachments={} avatar={avatar} date={new Date()} user={user} />
    </section>
  )
}
