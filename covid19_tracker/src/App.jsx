import './App.css';
import {useState,useEffect} from 'react'
import {CardContent, FormControl,MenuItem,Select,Card} from '@material-ui/core'
import axios from 'axios';
import {v4 as uuid} from 'uuid'
import { InfoBox } from './Components/InfoBox';
import { Map } from './Components/Map';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData,setTableData] = useState([])
  
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
      .then(data=>console.log(data))
      .catch(err => console.log(err))
  
  }, [])

  useEffect(() => {
    const url = country === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${country}`
    axios.get(url)
      .then(res =>{
        //console.log({ country }, "--", res.data)
        
        setCountryInfo(res.data)
        
      })
    .catch(err=>console.log(err))
  },[country])

 //console.log(">>>>>>>",countryInfo)
  
  
  const onCountryChange = (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)
  }


  return (
    <div className="app">


      <div className="app__left">
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
     
     
      {/* Status */}
      <div className="app__status">
          <InfoBox title="Cases" cases={countryInfo.todayCases} total={countryInfo.cases }/>
        <InfoBox title="Recover" cases={countryInfo.todayRecovered} total={countryInfo.recovered }/>
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths }/>
      </div>
      {/* map */}
        <Map />
      </div>
      
      <div className="app__right">

        <Card>
          <CardContent>
        {/* table */}
            <h2>Live cases by Country</h2>
      {/* graph */}
            <h2>World wide new Cases</h2>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default App;
