import React from 'react'
import countries from 'world-countries'
import CountryList from './components/CountryInfo.js'
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
          <Route path='Country/:cca3' element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
