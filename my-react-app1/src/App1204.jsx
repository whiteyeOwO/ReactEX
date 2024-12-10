
import { useEffect, useState } from "react";
import "./App.css"
import { IoUmbrellaSharp } from "react-icons/io5";
import axios from 'axios';
import ShowWeather from "./ShowWeather";

function App() {
  const [weatherList, setWeatherList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get("https://whiteyeowo.github.io/ReactEX/json/F-C0032.json");

      const { location } = data.data.cwaopendata.dataset;
      setWeatherList(location);

      // locationName => 縣市名
      // elementName => Wx => 天氣概況
      // elementName => PoP => 降雨率
    })()
  }, [])


  return (
    <>

      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="container">

          {
            weatherList.map((city) => {
              return (
                <div className="item" key={city.locationName}>

                  <div className="title">
                    <h3>{city.locationName}</h3>
                  </div>
                    <ShowWeather city={city}/>
                </div>

              )
            })
          }



        </div>
      </div>
    </>
  )
}

export default App /* 重要 */
