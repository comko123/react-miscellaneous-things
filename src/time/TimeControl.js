import { useCookies } from "react-cookie";
import React, { useState } from "react";
const TimeControl = () =>{
   const [logo,setLogo] =useState(true)
   const [cookies, setCookie] = useCookies([""]);
   setTimeout(()=>{setLogo(false)},3000)
   function Cksave (){
      let now = new Date();
      let after1m = new Date();
      after1m.setMinutes(now.getMinutes() + 2); 
      setCookie("remeberText", "Duration", { path: "/", expires: after1m });
   }
   Cksave()
   
 return (
    <>
    {logo?
    <>
    <h1>weather coder</h1>
    </>
    :
    <>
    <h1>main page</h1>
    <input type="button" value="Click" onClick={()=>{console.log(cookies)}}/>
    </>
    }
    </>
 )  
}
export default TimeControl;