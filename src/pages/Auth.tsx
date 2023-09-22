import { Login } from '@/modules/Login'
import { Route, Routes } from 'react-router-dom'
import { Register } from '@/modules/Register'
import { renderMultiRoutes } from '@/utils/renderMultiRoutes'

export const Auth = () => {
  return (
    <Routes>
      {renderMultiRoutes({ element: <Login />, paths: ['/login', '/register'] })}
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
