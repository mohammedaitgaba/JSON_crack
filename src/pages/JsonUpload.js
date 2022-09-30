import { Routes, Route, Link } from "react-router-dom";

function JsonUpload() {
    return (
      <div className='json'>
  
        <nav>
        <Link to="/">JsonUpload</Link><br/>
        <Link to="/AllFiles">AllFiles</Link><br/>
       
      </nav>
        </div>
        
    );
  }
  
export default JsonUpload;