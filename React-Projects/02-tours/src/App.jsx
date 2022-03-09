import { useEffect, useState } from "react";
import "./App.css";
import { Loading } from "./components/Loading";
import { Tours } from "./components/Tours";
// import data from './data.json'
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [toursData, setToursData] = useState([]);

  const removeTour = (id) => {
    const newTourData = toursData.filter((ele) => ele.id !== id);
    setToursData(newTourData);
  };

  const getToursData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tourData = await response.json();
      //  if(tourData.length !== 0 ? setToursData(tourData) : setToursData(data))

      setToursData(tourData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error - ", error);
    }
  };

  useEffect(() => {
    getToursData();
  }, []);

  console.log(toursData);
  if (toursData.length === 0) {
    return (
    <div className="main">
      <h1 className="main__heading">Our Tours</h1>
      <div className="main__content">
          <h1>No Tour Left</h1>
          <button className="refresh-btn" onClick={getToursData}>Refresh</button>
      </div>
    </div>
  );
  }

  return (
    <div className="main">
      <h1 className="main__heading">Our Tours</h1>
      <div className="main__content">
        {loading ? (
          <Loading />
        ) : (
          <Tours toursData={toursData} removeTour={removeTour} />
        )}

        {/* <Tours toursData={ toursData}/> */}
      </div>
    </div>
  );
}

export default App;
