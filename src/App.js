import React from 'react'
import countries from 'world-countries'
import CountryList from './components/CountryInfo.js'
import CountryInfo from './components/CountryInfo.js'
// <Route path=':id' element={<CountryList />} />
import CountryDetails from './pages/CountryDetails.js'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CountryList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
