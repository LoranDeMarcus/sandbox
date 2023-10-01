import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Auth } from '@/pages/Auth'
import { Home } from '@/pages/Home'

import './index.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Auth />} path="/*" />
        <Route element={<Home />} path="/chat" />
      </Routes>
    </div>
  )
}

export default App
