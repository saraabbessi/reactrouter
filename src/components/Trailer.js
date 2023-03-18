import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { movies } from '../Data/DataMovies';

function Trailer() {
    const { id }=useParams();
    const navigate =useNavigate();
    const [load , setLoad] = useState(false);

    const  film = movies.find ((film)=> film.id === Number (id));


  return (

    <>
    {load? (
     <Navigate to="/"/>
     ) : (

     <div>
     <iframe
      width="560"
      height="315" 
     src={film.frameUrl}
      title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>
       <div>
         <h2>{film.title}</h2>
         <p>{film.description}</p>
         <p>{film.rate}</p>
         <Button variant="light" onClick={()=>navigate("/movies")}>
             Go Back
         </Button>
       </div>
     </div>
)}
 </> );
}
export default Trailer;
