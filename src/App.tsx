import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/pages/Auth'
import { Chat } from '@/pages/Chat'

import './index.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Auth />} path="/*" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </div>
  )
}

export default App
