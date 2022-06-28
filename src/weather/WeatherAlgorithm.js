import { useEffect } from "react";

const WeatherAlgorithm = (props) =>{
    const {Htemp,Mtemp,outp,rain} = props
useEffect(()=>{
    console.log("당일 최고 온도: "+Math.round(Htemp)
    +" , "+"당일 최저 온도: "+Math.round(Mtemp)
    +" , "+"겉옷 여부: "+outp
    +" , "+"강수여부: "+rain)},[])
    return <></>
}
export default WeatherAlgorithm;