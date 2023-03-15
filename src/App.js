import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Community from './pages/Community'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export const defaultPath = location.pathname

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={defaultPath + '/'} element={<Login />} />
            <Route path={defaultPath + '/register'} element={<Register />} />
            <Route path={defaultPath + '/home'} element={<Home />} />
            <Route path={defaultPath + '/commun'} element={<Community />} />
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
    </BrowserRouter>
  )
}
