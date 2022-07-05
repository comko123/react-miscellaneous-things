import React,{useEffect, useState} from "react";
const TimeControl = () => {

const [logo,setLogo] = useState(true)

const input = () =>{
    if(sessionStorage.getItem("visit") === null){
        setTimeout(()=>{setLogo(false)},3000)
        console.log(logo)
        if(logo){sessionStorage.setItem("visit","checked");console.log(logo)}
    }
    else{setLogo(false)}
}
useEffect(()=>{input()},[])
    return(
        <>
        {(sessionStorage.getItem("visit") === null)?
        <><h1>weather coder</h1></>
        :
        <><h1>main page</h1></>}        
        </>
    )
}

export default TimeControl;