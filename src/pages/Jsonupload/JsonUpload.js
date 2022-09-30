import { Routes, Route, Link } from "react-router-dom";
import "./jsonUpload.css"
import '../../fontawesome/css/all.css';

function JsonUpload() {
    return (
      <section className="uploader_container">

      <div className="Json_uploader">
        <i class="fal fa-cloud-upload"></i>
        <p>Drag & Drop file here</p>
        <p>Or</p>
        <label for="file_uploader" className="file_uploader">Browse File</label>
        <input id="file_uploader" type="file" hidden></input>
      </div>


      <div className="show_json">
        <div className="file_destination"> Your File : Data(1).json </div>
        <div className="json_file"> brother brother brother <br></br> brother brother brother </div>
        
      </div>
      <div className="json_submit">
        Crack
      </div>
      </section>
    );
  }
  
export default JsonUpload;