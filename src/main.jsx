import React from 'react'
import {render} from 'react-dom'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App'
import Register from './pages/Register'
import Delete from './pages/Delete'
import Update from './pages/Update'

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/register' element={<Register />} />
      <Route path='/update' element={<Update />} />
      <Route path='/delete' element={<Delete />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
