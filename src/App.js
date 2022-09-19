import './App.css';
import countries from 'world-countries'
import CountryInfo from './components/CountryInfo.js';

const n = 5;
const m = 15;

function App() {
  console.log(countries)

  countries.sort((a, b) => {
    return b.area - a.area;
  });

  countries = countries.filter((country) => {
    return country.name.common !== "Antarctica";
  });
 
  return (
    <div>
      <h1>Lab-1-A-DOODLE-DOO</h1>
      <h2>Part 1</h2>
      <CountryInfo data={countries[0]}/>

      <h2>Part 2</h2>

      <div className='part2Div'>
        <div className='col1'>
          {countries.slice(0, n).map((c) => (
            <CountryInfo data={c} details={true} large_area={countries[0].area} key={c.ccn3}/>
          ))}
        </div>
      
        <div className='col2'>
          {countries.slice(n, m).map((c) => (
            <CountryInfo data={c} details={false} large_area={countries[0].area} key={c.ccn3}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
