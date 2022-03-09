import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    const response = await axios.get(url);
    console.log("response: ", response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }
  const { title, duties, dates, company } = data[count];

  return (
    <div className="App">
      <div className="heading">Experience</div>
      <div className="underline"></div>
      <div className="content">
        <div className="content__button">
          {data.map((ele, index) => (
            <button
              key={index}
              className={`btn ${index === count ? "active-btn" : ""}`}
              onClick={() => {
                setCount(index);
              }}
            >
              {ele.company}
            </button>
          ))}
        </div>
        <div className="content__Detaile">
          {
            <div>
              <h1 className="details__title">{title}</h1>
              <h4 className="details__company">{company}</h4>
              <p className="details__dates">{dates}</p>
              <div>
                {duties.map((ele, index) => (
                    
                    <p className="duties" key={index}>
                      <img src="./chevron_duo_right.svg" className="arrow" alt="" /> {ele}
                    </p>
                ))}
              </div>
            </div>
          }

          <button className="moreInfo">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default App;
