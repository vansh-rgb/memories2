import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {getposts} from "./actions/posts.js"

import Signup from './components/Auth/signup.js';
import Homepage from './components/Homepage.js';
import  "./App.css"


import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>{
   const [currId, setcurrId] = useState(null);
   const [username,setusername] = useState(null);
   function updateid(id){
     console.log('hbdh');
setcurrId(id);
   }
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getposts())
    
      
    }, [dispatch]);
    useEffect(() => {
      setusername(localStorage.getItem('usernames'));
    
     
    }, [])
    
    
    return(
       
        <BrowserRouter>
         <Routes>
       
       
        <Route path="/" element={<Homepage token={username} updatedid={updateid} id={currId} />} />
        <Route path="/signup" element={<Signup/>}/>
        </Routes>


       
        </BrowserRouter>
    )
}
export default App;