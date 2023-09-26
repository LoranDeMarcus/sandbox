import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/pages/Auth'
import { Chat } from '@/pages/Chat'

import './index.css'
import { renderMultiRoutes } from '@/utils/renderMultiRoutes'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
