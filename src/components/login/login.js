import './Login.css';

import React, {useState}  from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Register from '../Register/Register';


const Login = ({open,onClose}) =>{

    // const [openRegister, setOpenRegister ] = useState(false);


    if(!open ) return null
    return(
        <div className='Login'> 
         <p className='Close' onClick={onClose} >X</p> 
        
        <div className='NumLogo'>
            <p class="logo">
            JSON
             <span>crack</span> 
            </p>
        </div>  
        <div> 
            <p className='Lougin' >Login</p>
        </div>

        <div>
            <div>
                <p className='user'>UserNAme</p>
                <input className='InputUser' type='text'></input>
            </div>
            <div>
                <p className='user'>Password</p>
                <input className='InputUser' type='Password'></input>
                <p className='CreeCompte'>Cree un Compte??</p>
            </div>
            <button className='ButtonLougin'>Lougin</button>
           
            

            
        </div>
        
        
        
       
        

        
         </div>
        
    )
}


export default Login;