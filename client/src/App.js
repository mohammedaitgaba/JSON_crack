import './App.css';
import  NavBar from './components/header/header';

import { Routes, Route, Link } from "react-router-dom";
import AllFiles from './pages/AllFiles/AllFiles'
import JsonUpload from './pages/Jsonupload/JsonUpload'
import Crack from './pages/crack/JsonCrack'
import React, { useEffect, useState } from "react";


function App() {

  const [backendData, setBackendData] = useState([{}])

useEffect(()=>{
  fetch("/api/"+2).then(
    response=> response.json()
  ).then(
   data=>{
    setBackendData(data)
   }
 )
}, [])
      
  let modes
  const [dataFile, setData] = useState('');
  const getData = (data) => {
    setData(data);
  };
  const switchMode = (mode)=>{
    modes  = mode
    console.log("in the app compo",modes);
  }

  return (
    <div className='App'>
      <NavBar Modeswitcher = {switchMode} />
      <div className='body'>
        <Routes>
        <Route path="/" element={<JsonUpload onSubmit={getData}/>} />
        <Route path="/AllFiles" element={<AllFiles sendData={backendData}/>} />
        <Route path="/Crack" element={<Crack parentToChild={dataFile}/>} />
      </Routes> 
      </div >
      </div>
  );
}

export default App;
