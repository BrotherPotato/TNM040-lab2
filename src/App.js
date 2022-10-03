import React from 'react'
import CountryList from './pages/CountryList.js'
import CountryDetails from './pages/CountryDetails.js'
import './App.css'

import Layout from './pages/Layout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CountryList />} />
          <Route path='/country/:cca3' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
