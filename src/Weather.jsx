import React, { useState } from 'react'
import axios from "axios"

const Weather = () => {
    const[city,setCity]=useState("")
    const[weather,setWeather]=useState("")
    const updateCity=(e)=>{
        setCity(e.target.value)
        
    }
    const fetchWeather=async()=>{
try{
const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"d6328c87e59c607463ce6b1f7e091dc7"}`)
console.log(response)
setWeather(response)
setCity("")

}
catch(error){
console.log("error fetching,error")
}
    }
    const updateButton=()=>{
        fetchWeather();
    }

  return (
    <>
    <div className="weather-container">
<input type="text" placeholder='Enter your city'value={city} onChange={updateCity} />
<div>
<button onClick={updateButton}>Check Weather</button>
</div>
{weather && <>
<div className="weather-info">
    <h3>{weather.data.name}</h3>
    <p>{weather.data.main.temp}</p>
    <p>{weather.data.weather[0].description}</p>
    
</div>

</>}

    </div>
    </>
  )
}

export default Weather
