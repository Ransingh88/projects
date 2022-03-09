import { useEffect, useState } from "react";
import "./css/style.css";
import axios from "axios";

export function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8a1a49e508328e112aa72b23f174f922`;
      const response = await fetch(url);

      const res = await response.json();
      console.log(res);
      setCity(res.main);
    };
    // const url = `api.openweathermap.org/data/2.5/weather?q=${search}&appid=8a1a49e508328e112aa72b23f174f922`
    //         axios.get(url).then((res) => {
    //             console.log(res)
    //         })

    fetchApi();
  }, [search]);

  return (
      <>
          
<div className="box">
            <div className="inputData">
              <input
                type="search"
                name=""
                id=""
                      className="inputField"
                      placeholder='Search'
                onChange={(e) => {
                    setSearch(e.target.value);
                    
                }}
              />
            </div>

      {!city ? (
        <p>Data not Found</p>
      ) : (
        <div>
          

            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp } *C</h1>
                              <h3 className="tempmin_max"> Max - { city.temp_max} | Min - { city.temp_max}</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        
              )}
              </div>
    </>
  );
}
