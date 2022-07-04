export default function Display({humidity,temp,weather,dt}){
        let dateValue = new Date()
        let value = new Date(dt*1000)
       
    return(
    <>
    {dateValue.getDate()!==value.getDate()?null:
      value.getHours() ===10 
    ||value.getHours() ===16 
    ||value.getHours() ===20 
    ||value.getHours() ===23 ?
     <>
     <br/>
     <h1>{value.getHours()===10?
     "아침":value.getHours()===16?
     "점심":value.getHours()===20?
     "저녁":"밤"} </h1>
     <h1>습도:{humidity}</h1>
     <h1>온도:{Math.round(temp)}</h1>
     {weather.map(R=>{return(
     <div key={R.id}>
     <h1 >{R.main}</h1>
     <h1 >{R.description}</h1>
     </div>
     )})}
     <br/>
     </>:null}
   
    </>
    )
}