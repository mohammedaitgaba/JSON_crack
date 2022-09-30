import { Routes, Route, Link } from "react-router-dom";
import React, {useState}  from "react";
import Login from "../components/login/login";

function AllFiles() {

  const [openLogin, setOpenLogin ] = useState(false);
    return (
      <div className='allfiles'>
        <p>All Files</p>
        <Link to="/">JsonUpload</Link><br/>
        <Link to="/AllFiles">AllFiles</Link><br/>
        <button onClick={()=> setOpenLogin(true)}> lougin </button>
        <Login open={openLogin} onClose={()=> setOpenModal(false)} />
        </div>
        
    );
  }
  
export default AllFiles;