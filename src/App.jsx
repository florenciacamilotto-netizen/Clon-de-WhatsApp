import React, { useState } from 'react'
import './Styles/App.css'
import './Styles/Chat.css'
import './Styles/Loading.css'
import './Styles/Login.css'
import './Styles/Menu.css'
import './Styles/Sidebar.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Screens/Login/Login.jsx'
import Loading from './Screens/Loading/Loading.jsx'
import Home from './Screens/Home/Home.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/home' element={<Home darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />} />
      </Routes>
    </div>
  )
}

export default App