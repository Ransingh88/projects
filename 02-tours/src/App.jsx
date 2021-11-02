import { useEffect, useState } from 'react';
import './App.css';
import { Loading } from './components/Loading'
import { Tours } from './components/Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [toursData, setToursData] = useState([])
  

  const getToursData = async () => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const tourData = await response.json();
      setToursData(tourData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("Error - ",error)
    }
  }

  useEffect(() => {
    getToursData()
  },[])
  
  

  return (
    <div className="main">
      <h1 className="main__heading">Our Tours</h1>
      <div className="main__content">
        {loading ? <Loading /> : (<Tours toursData={ toursData}/>)}
      </div>
    </div>
  );
}

export default App;
