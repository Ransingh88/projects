import './App.css';
import {useState,useEffect} from 'react'
import {CardContent, FormControl,MenuItem,Select,Card} from '@material-ui/core'
import axios from 'axios';
import {v4 as uuid} from 'uuid'
import { InfoBox } from './Components/InfoBox';
import { Mapp } from './Components/Map';
import { Table } from './Components/Table'
import {LineGraph} from './Components/LineGraph'
import { prettyPrintStat, sortData } from './utils/utils';
import "leaflet/dist/leaflet.css"

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter,setMapCenter] = useState({lat:34.80746, lng:-40.4796})
  const [mapZoom, setMapZoom] = useState(3)
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState("cases")
  console.log(casesType);
  
  useEffect(() => {
    
    axios.get("https://disease.sh/v3/covid-19/countries")
      .then(res => {
        const countries = res.data.map(country => (
          
          {
            countryName: country.country,
            countryCode:country.countryInfo.iso2
          }
          
        ))

        const sortedData = sortData(res.data)
        //console.log(countries)
        setCountries(countries)
        setTableData(sortedData)
        setMapCountries(res.data)
      })
      .then(data=>console.log(data))
      .catch(err => console.log(err))
  
  }, [])

  useEffect(() => {
    const url = country === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${country}`
    axios.get(url)
      .then(res =>{
        //console.log({ country }, "--", res.data.countryInfo)
       
        setCountryInfo(res.data)
        setMapCenter([res.data.countryInfo.lat,res.data.countryInfo.long])
        setMapZoom(14)
        
      })
    .catch(err=>console.log(err))
  },[country])

 //console.log(">>>>>>>",countryInfo)
  
  
  const onCountryChange =  (e) => {
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
          <InfoBox onClick={e => setCasesType('cases')} title="Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases )}/>
        <InfoBox onClick={e => setCasesType('recovered')} title="Recover" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered) }/>
        <InfoBox onClick={e => setCasesType('deaths')} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths )}/>
      </div>
      {/* map */}
        <Mapp casesType={casesType} countries={mapCountries } center={mapCenter} zoom={mapZoom}/>
      </div>
      
      <div className="app__right">

        <Card>
          <CardContent>
        {/* table */}
            <h2>Live cases by Country</h2>
            <Table countries={ tableData}/>
      {/* graph */}
            <h2>World wide new {casesType }</h2>
            <LineGraph casesType={ casesType}/>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default App;
