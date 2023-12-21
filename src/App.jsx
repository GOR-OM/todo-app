import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import './styles/App.scss'
import  Home  from './pages/Home'
import Header from './component/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
function App() {
  

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />



        </Routes>
      </Router>
    </>
  )
}

export default App
