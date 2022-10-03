import React from 'react'
import CountryList from './pages/CountryList.js'
import CountryDetails from './pages/CountryDetails.js'
import Layout from './pages/Layout'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CountryList />} />
        <Route path='/' element={<Layout />}>
          <Route path='/country/:cca3' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
