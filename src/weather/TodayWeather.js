import axios from "axios";
import { useEffect, useState } from "react";
const TodayWeather = (props) => {
    const  {latitude,longitude} = props
    const [weatherTemp,setWeatherTemp]=useState({}) 
    const [realWeather,setRealWeather]=useState([])
    const Today = async() => {
    const todayWeather = (await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`)).data
     setWeatherTemp(todayWeather.main);setRealWeather(todayWeather.weather)
    } 
   useEffect(()=>{Today()},[props])
return(
    <>
    <h1>현재</h1>
    <h1>습도 : {weatherTemp.humidity}</h1>
    <h1>온도 : {weatherTemp.temp}</h1>
    {realWeather.map(P=>{
        return(
        <div key={P.id}>
        <h1>{P.main}</h1>
        <h1>{P.description}</h1>
        </div>)
    })}
    </>
)
}
export default TodayWeather;