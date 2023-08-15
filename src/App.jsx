import React from 'react'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <Routes>
        {/* <Switch></Switch> */}
        <Route path='/' Component={Home} />
        <Route path='/blog/:id' Component={Blog} />
      </Routes>
    </div>
  )
}

export default App