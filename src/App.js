import React from 'react'
import CountryList from './components/CountryList'
import {
  //  createBrowserRouter,
  //  RouterProvider,
  Route,
  Link
} from 'react-router-dom'

function App () {
  return (
    <div>
      <Route path='/' element={<CountryList />}>
        <Link to='/'>Home</Link>
        <Link to='/country/:id'>Country Details</Link>
      </Route>
    </div>
  )
}

export default App
