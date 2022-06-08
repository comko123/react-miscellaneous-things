import axios from "axios";
import { useEffect, useState } from "react";
const  MovieComponents = ()=>{
 const [data,setData] = useState({});
 const [loding,setLoding]= useState(true);
 const movieData = async()=>{
     setData(await(await axios(`https://yts.mx/api/v2/movie_details.json?movie_id=37384`)).data.data.movie)
     setLoding(false)
    }
    useEffect(()=>{ movieData();},[])
       
    return(<>
    {loding?<h1>Loading.....</h1>
    :
    <div>
        <h1>show your console</h1>
    {data.genres.map((k)=><h1 key={k}>{k}</h1>)}
    </div>}
    </>)
}
export default MovieComponents;