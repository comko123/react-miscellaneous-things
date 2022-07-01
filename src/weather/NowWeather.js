import axios from "axios";
import { useEffect, useState } from "react";
const NowWeather = (props) => {
    const  {latitude,longitude} = props
    const [weatherTemp,setWeatherTemp]=useState({}) 
    const [realWeather,setRealWeather]=useState([])
   
        useEffect(()=>{const nowWeather = async() =>{
    const nowWeatherData = (await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`)).data
        setWeatherTemp(nowWeatherData.main);setRealWeather(nowWeatherData.weather);
    }
nowWeather()
},[props])
return(
    <>
    <h1>현재</h1>
    <h1>습도 : {weatherTemp.humidity}</h1>
    <h1>온도 : {Math.round(weatherTemp.temp)}</h1>
    {realWeather.map(P=>{
        return(
        <div key={P.id}>
        <h1>{P.main}</h1>
        </div>)
    })}
    </>
)
}
export default NowWeather;