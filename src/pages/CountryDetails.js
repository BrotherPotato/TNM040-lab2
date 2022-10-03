import React from 'react'
import { useParams } from 'react-router-dom'
import countries from 'world-countries'
import CountryInfo from '../components/CountryInfo.js'

function getCountryByCca3 (arg) {
  return countries.find(({ cca3 }) => cca3 === arg)
}

function CountryDetails () {
  const params = useParams()
  const cca = params.cca3
  const c = getCountryByCca3(cca)

  const borders = c.borders.map((c) => getCountryByCca3(c))
  borders.sort((a, b) => b.area - a.area)

  countries.sort((a, b) => {
    return b.area - a.area
  })

  return (
    <div>
      <CountryInfo data={c} details largeArea={countries[0].area} key={c.ccn3} />

      <h2 style={{ margin: '0.5em' }}>BORDER COUNTRIES: {borders.length}</h2>

      {borders.map((b) => (
        <CountryInfo key={b.ccn3} data={b} detailed={false} />
      ))}

    </div>
  )
}

export default CountryDetails
