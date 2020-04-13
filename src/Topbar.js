
import React, { useState, useEffect } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

import './css/Topbar.css'

const api = {
  key: "47e2b3172a51d2bbcc48e6f439824141",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Topbar() {
  const [query, setQuery] = useState('vilnius');
  const [weather, setWeather] = useState({});

//   const search = (evt) => { //evt
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

  useEffect(() => {
    location();
  }, []);

  const location = () => { 
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="topbar">
        <p>
            <span className="font-italic">Smart</span><span className="font-weight-bold">Home</span>
        </p>
        {/* <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}> */}
            <main>
                {/* <div className="search-box">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                    {/* <Form inline>
                        <FormControl 
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            // onKeyPress={search}
                        />
                        <Button onClick={search} type="submit">Submit</Button>
                    </Form> 
                </div> */}
                {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}</div>
                    </div>
                    <div className="location-box">
                        <div className="location">
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className="date">
                            {dateBuilder(new Date())}
                        </div>
                    </div>
                </div>
                ) : ('')}
            </main>
        </div>
    // </div>
  );
}

export default Topbar;