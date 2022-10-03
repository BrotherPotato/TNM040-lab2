import countries from 'world-countries'
import CountryInfo from '../components/CountryInfo.js'
import { useState } from 'react'

const n = 5
const m = 15

function CountryList () {
  const [searchString, setSearchString] = useState('')

  countries.sort((a, b) => {
    return b.area - a.area
  })

  const filteredCountries1 = countries.filter((country) => {
    return country.name.common !== 'Antarctica'
  })

  const changeSearchString = (e) => {
    setSearchString(e.target.value)
  }

  const filteredCountries2 = filteredCountries1.filter(countries => {
    const lowerCaseCountryName = countries.name.common.toLowerCase()
    const lowerCaseSearchString = searchString.toLowerCase()

    return lowerCaseCountryName.slice(0, lowerCaseSearchString.length) === lowerCaseSearchString
  })

  return (
    <div>
      <h1>Lab-2-A-DOODLE-DOO</h1>
      <h2>Part 1</h2>
      <input type='text' id='search' placeholder='Search for a country' onInput={changeSearchString} />

      <h2>Part 2</h2>
      <div className='part2Div'>
        <div className='col1'>
          {filteredCountries2.slice(0, n).map((c) => (
            <CountryInfo data={c} details largeArea={countries[0].area} key={c.ccn3} />
          ))}
        </div>

        <div className='col2'>
          {filteredCountries2.slice(n, m).map((c) => (
            <CountryInfo data={c} details={false} largeArea={countries[0].area} key={c.ccn3} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryList
