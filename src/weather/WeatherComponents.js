import axios from "axios";
import { useEffect ,useState } from "react";
import WeatherAlgorithm from "./WeatherAlgorithm";
import WeatherDisplay from "./WeatherDisplay";
export default function WeatherComponents(){
    const [latitude,setLatitude] = useState(0)
    const [longitude,setLongitude]=useState(0)
    const [userWeather,setUserWeather] = useState([])
    const [loading,setLoading] = useState(true);
    const [highTemp,setHighTemp] = useState(0) 
    const [lowTemp,setLowTemp] = useState(0)     
    const [outerClothing,setOuterClothing] =useState(false)
    
    const getLocation = () => {
      if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition((position) => {
            //console.log(position.coords)
             //console.log(navigator)
          console.log(" 위도 : "+position.coords.latitude.toFixed(4)+" , 경도 : "+position.coords.longitude.toFixed(4))
          setLatitude(position.coords.latitude.toFixed(4))
          setLongitude(position.coords.longitude.toFixed(4))
        },(error) => {
          console.error(error);
        }, {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity
        });
      } else {
        alert('GPS를 지원하지 않습니다');
      }
    }
    const inputWeather = async() => {  
     setUserWeather((await 
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`))
    .data.hourly)
   }
useEffect(()=>{inputWeather()},[])
useEffect(()=>{getLocation()},[])
           
    const ClickEvent = () => {
    
      const dateValue = new Date()
        const  array = 
        userWeather.map((R)=>{ 
          const value = new Date(R.dt*1000); 
          return dateValue.getDate()!==value.getDate()?
          null:R.temp })
          const data = array.filter(E=>E!==null)
          const hotdata = Math.max.apply(null,data)
          setHighTemp(hotdata)
          const colddata = Math.min.apply(null,data)
          setLowTemp(colddata)
          setLoading(false)
          if(hotdata>=23||colddata<=12){setOuterClothing(true)}
            else{setOuterClothing(false)}

            const rainning =  
            userWeather.map((R)=>{ 
              const value = new Date(R.dt*1000); 
              return dateValue.getDate()!==value.getDate()?
              null:R.weather.map((K)=>K.main) })
              const rainData = rainning.filter(E=>E!==null)
          console.log(data) 
          console.log(rainData)
          console.log(rainData.map(Y=>Y==="Rain"?true:false))
    }
    
    return(<>{loading?
    <>
    <h1>loading.....</h1>
    <button onClick={ClickEvent}>click</button>
    </>
    :<> 
    <h1>Today weathers</h1>
        {userWeather.map((R)=>{
        return<WeatherDisplay 
        key={R.dt} 
        dt={R.dt} 
        humidity={R.humidity}
        temp={R.temp}
        weather={R.weather}
        />})}
       <WeatherAlgorithm Htemp = {highTemp} Mtemp={lowTemp} outp = {outerClothing}/>
    </>}  
    </>)
}