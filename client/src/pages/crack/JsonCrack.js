import Links from '../../components/navLinks/links'
import "./JsonCrack.css"
import '../../fontawesome/css/all.css';
import React, { useState } from "react";

function JsonCrack({parentToChild}) {
  const [mainjson,setMainjson] = useState(JSON.parse(parentToChild))
  console.log(mainjson );


  let step ="mainobject"
  const crackJSON = (object)=>{
    Object.keys(object).forEach(key => {
      
      if (typeof object[key] !== 'object' && !Array.isArray(object[key])) {
        if (step == key || step=="mainobject") {
          
          console.log( key +" : "+ object[key] );
          document.getElementById("cracked_container").innerHTML += ` "${key}" : ${object[key]} <br>`
        }
  
        }
        
      })
      Nested_Obj(object)
  } 
  
   const Nested_Obj =(object)=>{
    Object.keys(object).forEach(key => {
      
      if (typeof object[key] === 'object') {
        step = key
        let div = document.createElement("div")
        let new_key = parseInt(key)
        if (!Number.isInteger(new_key)) {
          console.log("steeep",step);
          div.setAttribute("id",key)
          
          document.getElementById("test").append(div)
          document.getElementById(key).innerHTML= key
          let divValues=document.createElement("div")
          divValues.setAttribute("id",key+"child")
          document.getElementById(key).append(divValues)
          if (Array.isArray(object[key])) {
            
            Object.values(object[key]).forEach(value => {
    
              let mykey = Object.keys(value)
              let myvalue = Object.values(value);
              document.getElementById(key+"child").innerHTML += ` "${mykey }" : ${ myvalue } <br>`
            })
          }
          else
          if (typeof object[key] === 'object' && !Array.isArray(object[key]) ) {
            console.log(object[key]);
            document.getElementById(key+"child").innerHTML += JSON.stringify(object[key])+"<br>"
          }
          // else{
          //   document.getElementById(key+"child").innerHTML += JSON.stringify(object[key])+"<br>"
          // }
  
        }
  
        // console.log("dddddddddd",document.getElementsByClassName("1")); 
          
        // console.log(key);
        crackJSON(object[key])
          console.log( key +":"+ object[key]  );
        }
        
      })
  }



    return (
      <div>
        <Links />
      <button onClick={()=> crackJSON(mainjson)} >show it </button>

      <section className="crack_container">
      <div className="show_json_crack">
        <div className="file_destination_crack"><p>Your File : </p></div>
        <div className="json_file_crack"><pre>{parentToChild}</pre></div>
      </div>
      <div className="show_crack">
        <div className="file_destination_crack"><p>Json crack : </p></div>
        <div className="json_file_crack"><pre></pre>
          <div className="cont">
            <div id="cracked_container">
              {/* <div id="me"> </div>
              <div id="pp"></div> */}
              
            </div>
            <div id="test"></div>
          </div>
        </div>
      </div>
      </section>
      </div>
      
    );
  }

  
export default JsonCrack;