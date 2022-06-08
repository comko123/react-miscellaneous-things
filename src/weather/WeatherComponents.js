import axios from "axios";
import { useEffect ,useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
export default function WeatherComponents(){
    const [adress,setAdress] = useState({})
    const [userWeather,setUserWeather] = useState([])
    const [loading,setLoading] = useState(true);
    const getLocation = () => {
        if (navigator.geolocation) { // GPS를 지원하면
          navigator.geolocation.getCurrentPosition((position) => {
              console.log(position)
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
    <h1>clear weather</h1>
        {userWeather.map((R)=><WeatherDisplay 
        key={R.dt} 
        dt={R.dt} 
        humidity={R.humidity}
        temp={R.temp}
        weather={R.weather}
        />)}

    </>}
   
    </>)
}