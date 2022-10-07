import Links from '../../components/navLinks/links'
import "./JsonCrack.css"
import '../../fontawesome/css/all.css';
import React, { useState } from "react";

function JsonCrack({parentToChild}) {
  console.log(parentToChild);
    return (
      <div>
        <Links />
      <section className="crack_container">
      <div className="show_json_crack">
        <div className="file_destination_crack"><p>Your File : </p></div>
        <div className="json_file_crack"><pre>{parentToChild}</pre></div>
      </div>
      <div className="show_crack">
        <div className="file_destination_crack"><p>Json crack : </p></div>
        <div className="json_file_crack"><pre></pre></div>
      </div>
      </section>
      </div>
      
    );
  }

  
export default JsonCrack;