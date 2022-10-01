import Links from '../../components/navLinks/links'
import "./jsonUpload.css"
import '../../fontawesome/css/all.css';
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function JsonUpload(props) {
  const [files, setFiles] = useState("");
  const [name, setName] = useState("No File Uploaded");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    setName(e.target.files[0].name);
    fileReader.onload = e => {
      setFiles(e.target.result);
      props.onSubmit(e.target.result);
    };
  };

    return (
      <div>
<Links />
      <section className="uploader_container">
        
      <div className="Json_uploader">
        <i class="fal fa-cloud-upload"></i>
        <p>Drag & Drop file here</p>
        <p className="or">Or</p>
        <label for="file_uploader" className="file_uploader">Browse File</label>
        <input id="file_uploader" type="file" onChange={handleChange} hidden></input>
      </div>


      <div className="show_json">
        <div className="file_destination"><p>Your File : {name}</p></div>
        <div className="json_file"><pre>{files}</pre></div>
        
      </div>
      <Link activeStyle={{ color: 'red' }} to="/Crack">
      <div className="json_submit">
        Crack
      </div></Link>
      </section>
      </div>
      
    );
  }

  
export default JsonUpload;