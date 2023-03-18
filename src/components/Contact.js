import React from 'react';
import {useParams, userParams} from "react-router-dom";

function Contact() {
     const {name,id}= useParams();
     
  return ( 
  <div>
    <h2>{`hello from ${name} and my id is ${id}`}</h2>
  </div>
  );
}

export default Contact;
