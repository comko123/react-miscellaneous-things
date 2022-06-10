export default function Display(props){
        const value = new Date(props.dt*1000)
        const {humidity,temp,weather} = props
       const dateValue = new Date()
       console.log(dateValue.getDate()===value.getDate()?"1":"2")
     
    return(
    <>
    {dateValue.getDate()!==value.getDate()?null:
      value.getHours() ===10 
    ||value.getHours() ===16 
    ||value.getHours() === 20 
    ||value.getHours() ===23 ?
     <>
     <br/>
     <h1>{value.getHours()} 시</h1>
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