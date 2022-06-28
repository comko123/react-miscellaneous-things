import { useEffect ,useState } from "react";
import InputWeather from "./InputWeather";
export default function WeatherComponents(){
    const [latitude,setLatitude] = useState(0)
    const [longitude,setLongitude]=useState(0)
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
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
getLocation()   

    return(<>
       <InputWeather latitude={latitude!==0?latitude:0} longitude = {longitude!==0?longitude:0}/>
    </>  
    )
}