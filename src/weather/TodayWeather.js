import axios from "axios";
import NowWeather from "./NowWeather";
import WeatherDisplay from "./WeatherDisplay";
import WeatherAlgorithm from "./WeatherAlgorithm";
import { useEffect, useMemo, useState } from "react"
export default function TodayWeather(props){
    const  {latitude,longitude} = props
    const [weatherObject,setWeatherObject] = useState([])
    const [rainData,setRainData] = useState(false)
    const [lowTemp,setLowTemp] = useState(0) 
    const [highTemp,setHighTemp] = useState(0) 
    const [loading,setLoading] = useState(true)
    const [pageLoading,setPageLoading] = useState(true)
    const [outerClothing,setOuterClothing] = useState(false)

const todayLocation = useMemo(()=>{
    return {
        yourLatitude:latitude,
        yourLongitude:longitude
    }
},[props])

const {yourLatitude,yourLongitude} = todayLocation

useEffect(()=>{const todayWeather = async() => {if(yourLatitude!==0&&yourLongitude!==0){
    setWeatherObject(
        await(
            await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${yourLatitude}&lon=${yourLongitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`)
    ).data.hourly)
    setLoading(false);   
  }}
todayWeather()
},[todayLocation])
    
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
         if(colddata<=12||hotdata>=23){setOuterClothing(true)}
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

        <NowWeather latitude={yourLatitude} longitude = {yourLongitude}/>

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