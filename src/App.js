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
 
const consoleReturn = (e) => {
  console.log("You clicked on " + e.target.value);
}

  return (
    <div>
      <h1>Lab-2-A-DOODLE-DOO</h1>
      <h2>Part 1</h2>
      <input type="text" id="search" placeholder="Search for a country" onInput={consoleReturn} />

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
