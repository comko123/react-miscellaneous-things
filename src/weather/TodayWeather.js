import axios from "axios";
import { useEffect } from "react";

const TodayWeather = (props) => {
    const  {latitude,longitude} = props
    const Today = async() => {
       console.log(
        await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b9dc2c29f0c437b89527b6b12e02421&units=metric`)
       )

    } 
    useEffect(()=>{Today()},[])
return(
    <>
    </>
)
}
export default TodayWeather;