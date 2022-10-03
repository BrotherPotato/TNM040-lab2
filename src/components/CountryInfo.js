import { Link } from 'react-router-dom'

const CountryInfo = ({ data, details, largeArea }) => {
  return (
    <div className='country_box'>
      <div className='top'>
        <Link className='country_name' to={'/Country/' + data.cca3}>{data.name.common}</Link>
        <p className='area'>
          {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
        </p>
      </div>
      {details && (
        <div className='bottom'>
          <p className='capital'>Capital: {data.capital}</p>
          <p className='capital'>Region: {data.subregion}</p>
        </div>
      )}

      <div className='bar'>
        <div className='bar_inner' style={{ width: (data.area / largeArea * 100) + '%' }} />
      </div>
    </div>
  )
}

export default CountryInfo
