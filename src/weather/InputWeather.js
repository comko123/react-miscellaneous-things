import axios from "axios";
import TodayWeather from "./TodayWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherAlgorithm from "./WeatherAlgorithm";
import { useMemo, useState } from "react"
export default function InputWeather(props){
    const  {latitude,longitude} = props
    const [weatherObject,setWeatherObject] = useState([])
    const [rainData,setRainData] = useState(false)
    const [lowTemp,setLowTemp] = useState(0) 
    const [highTemp,setHighTemp] = useState(0) 
    const [loading,setLoading] = useState(true)
    const [pageLoading,setPageLoading] = useState(true)
    const [outerClothing,setOuterClothing] = useState(false)
 
const label =async() =>{
if(latitude!==0&&longitude!==0){
setWeatherObject(
    await(
        await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`)
).data.hourly)
setLoading(false);   
}
}

useMemo(()=>{label()},[props])

        const RainAndTemp = () => {
            const dateValue = new Date()
            const  array = weatherObject.map((R)=>{
            const value = new Date(R.dt*1000); 
            return dateValue.getDate()!==value.getDate()?
          null:R.temp })
          const data = array.filter(E=>E!==null)
          const hotdata = Math.max.apply(null,data)
          const colddata = Math.min.apply(null,data)
          setHighTemp(hotdata)
          setLowTemp(colddata)
          setPageLoading(false)
         if(hotdata>=23||colddata<=12){setOuterClothing(true)}
        else{setOuterClothing(false)}

         const rainning =  
         weatherObject.map((R)=>{ 
           const value = new Date(R.dt*1000); 
           return dateValue.getDate()!==value.getDate()?
           null:R.rain??null })
           const rainData = rainning.filter(E=>E!==null)
           if(rainData.length!==0){setRainData(true)}
           else(setRainData(false)) 
        }
        
    return (<>{loading?
        <>
        <h1>loading.....</h1>
        </>
        :pageLoading?
        <>
        <h1>오늘의 날씨</h1>
        <button onClick={RainAndTemp}>click</button>
        </>:
        <> 
        <h1>Today weathers</h1>

        <TodayWeather latitude={latitude} longitude = {longitude}/>

            {weatherObject.map((R)=>{
            return<WeatherDisplay 
            key={R.dt} 
            dt={R.dt} 
            humidity={R.humidity}
            temp={R.temp}
            weather={R.weather}
            />})}
           <WeatherAlgorithm Htemp = {highTemp} Mtemp={lowTemp} outp = {outerClothing} rain={rainData}/>
        </>}  
        </>)}