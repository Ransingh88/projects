import './App.css';
import {useState,useEffect} from 'react'
import {FormControl,MenuItem,Select} from '@material-ui/core'
import axios from 'axios';
import {v4 as uuid} from 'uuid'

function App() {

  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries")
      .then(res => {
        const countries = res.data.map(country => (
          
          {
            countryName: country.country,
            countryCode:country.countryInfo.iso2
          }
          
        ))
        //console.log(countries)
        setCountries(countries)
      })
    .catch(err=>console.log(err))

  }, [])

  useEffect(() => {
    const url = country === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${country}`
    axios.get(url)
      .then(res => console.log({country},"--",res.data))
    .catch(err=>console.log(err))
  }, [country])
  
  
  const onCountryChange = (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)

  }

  return (
    <div className="app">
      {/* header */}
      <div className="app__header">
      <div className="app__logo">
      <img src="./images/covid19_logo.jpg" alt="logo"/>
      <h1>Tracker</h1>
      </div>
      <FormControl className="app__dropdown">
        <Select value={country} variant="outlined" onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem key={uuid()}value={country.countryCode}>{ country.countryName}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      <div className="app__status">
        
      </div>





      {/* Status */}
      {/* map */}
      {/* table */}
      {/* graph */}
    </div>
  );
}

export default App;
