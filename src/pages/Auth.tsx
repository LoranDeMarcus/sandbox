import { Login } from '../modules/Login'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../modules/Register'

export const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
