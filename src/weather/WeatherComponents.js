import axios from "axios";
import { useEffect ,useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
export default function WeatherComponents(){
    const [adress,setAdress] = useState({})
    const [userWeather,setUserWeather] = useState([])
    const [loading,setLoading] = useState(true);
    const [highTemp,setHighTemp] = useState(0) 
    const [lowTemp,setLowTemp] = useState(0)     
    const [outerClothing,setOuterClothing] =useState(false)

    const ClickEvent = () => {
      const dateValue = new Date()
        const  array = 
        userWeather.map((R)=>{ 
          const value = new Date(R.dt*1000); 
          return dateValue.getDate()!==value.getDate()?
          null:R.temp })
          const data = array.filter(E=>E!==null)
          const hotdata = Math.max.apply(null,data)
          const colddata = Math.min.apply(null,data)
          if(hotdata>23||colddata<12){setOuterClothing(true)}
            else{setOuterClothing(false)}
          console.log("당일 최고온도",hotdata)
          console.log("당일 최저온도",colddata)
          console.log(data)
          
    }

    const getLocation = () => {
        if (navigator.geolocation) { // GPS를 지원하면
          navigator.geolocation.getCurrentPosition((position) => {
              //console.log(position)
               //console.log(navigator)
            setAdress(position.coords)
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
      useEffect(()=>{getLocation()},[])

      const inputWeather = async() => {
setUserWeather((await 
    axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${adress.latitude}&lon=${adress.longitude}&appid=f980d31253eb2b185606cca64544373f&units=metric`))
.data.hourly)
setLoading(false);  
      }
    return(<>{loading?
    <>
    <h1>loading.....</h1>
    <button onClick={inputWeather}>click</button>
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
<button onClick={ClickEvent}>click</button>
        {console.log(outerClothing)}
    </>}  
    </>)
}