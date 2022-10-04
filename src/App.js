import './App.css';
import  NavBar from './components/header/header';

import { Routes, Route, Link } from "react-router-dom";
import AllFiles from './pages/AllFiles/AllFiles'
import JsonUpload from './pages/Jsonupload/JsonUpload'
import Crack from './pages/crack/JsonCrack'
import React, { useState } from "react";


function App() {
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
        <Route path="/AllFiles" element={<AllFiles />} />
        <Route path="/Crack" element={<Crack parentToChild={dataFile}/>} />
      </Routes> 
      </div >
      </div>
  );
}

export default App;
