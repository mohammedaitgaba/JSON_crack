import { Routes, Route, Link } from "react-router-dom";

function AllFiles() {
    return (
      <div className='allfiles'>
        <p>All Files</p>
        <Link to="/">JsonUpload</Link><br/>
        <Link to="/AllFiles">AllFiles</Link>
        </div>
        
    );
  }
  
export default AllFiles;