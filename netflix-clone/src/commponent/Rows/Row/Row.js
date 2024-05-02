import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../../utils/axios';
 

const Row 
 = ({title,fetchUrl,islargeRow}) =>
 {
  const[movies,setMovie]=useState([]);

    // const[trailerUrl,setTrailerUrl]=useState("");
    const base_url = "https://image.tmdb.org/t/p/original";

         useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl)
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(
          request.data.results) ;
         } catch (error){
            console.log("error",error);
        }
    })()
  }, [fetchUrl]);
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
  // return (
  //   <div
  //     className="banner"
  //     style={{
  //       backgroundSize: "cover",
  //       // backgroundImage: `url(
  //       //   "https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
         
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //     }}
//     >
const opts ={
  height :'390',
  width :"100%",
  playerVars:{
    autoplay:1,},
  }
return (
      <div className ="row">
      <h1>{title}</h1>

        <div className="row_posters">
        {movies?.map((movie,index) =>(
          <img 
          // onclick={()=> handclick(movie)}
          key={index} src={`${base_url}${islargeRow? movie.Poster_path:movie.backdrop_path}`}alt={movie.name}className={`row-poster $ {isLargeRow &&"row_posterLarge"}`}/>
        ))}
                  </div>
                  {/*<div style={{padding:'40px}}>{trailerUrl && <youTube VideoId = {opts}/>}'</div> */}
                  </div>
)}
                
      
            
        
export default Row
