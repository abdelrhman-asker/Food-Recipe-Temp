import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, Router, NavLink, Link } from 'react-router-dom'
import Home from './Home'
import Recipe from './Recipe'

const App = () => {
  return (
    <BrowserRouter>
      
      
      <Routes>
        <Route path='/' element={<Home />} />


      </Routes>


    </BrowserRouter>
  )
}

export default App