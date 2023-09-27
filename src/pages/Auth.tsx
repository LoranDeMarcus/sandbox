import { Route, Routes } from 'react-router-dom'

import { Login } from '@/modules/Login'
import { Register } from '@/modules/Register'
import { renderMultiRoutes } from '@/utils/renderMultiRoutes'

export const Auth = () => {
  return (
    <Routes>
      {renderMultiRoutes({ element: <Login />, paths: ['/', '/login'] })}
      <Route element={<Register />} path="register" />
    </Routes>
  )
}
