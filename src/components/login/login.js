import './Login.css';

import React, {useState}  from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from '../Register/Register';
// import Register from '../Register/Register';


const Login = ({open,onClose}) =>{
    const [register,setRegister] = useState(false)
    // const [openRegister, setOpenRegister ] = useState(false);
    
    const gotoRegister = ()=>{
        
        setRegister(true)
        console.log(register);
    }
    const gotoLogin = ()=>{
        setRegister(false)
    }
    if(!open ) return null

    if (register) {
        return (
            <div className='LoginContainer'>
            <div className='Rougister'> 
            <div className='Close'>  <i class="fal fa-times-circle"  onClick={onClose}></i></div>
          
            
            
            <div className='NumLogo'>
                <p class="logo">
                JSON
                 <span>crack</span> 
                </p>
            </div>  
            <div> 
                <p className='Lougin' >Register</p>
                
                
            </div>
    
            <div>
                <div>
                    <p className='user'>UserNAme</p>
                    <input className='InputUser' type='text'></input>
                </div>
              
                <div>
                    <p className='user'>Password</p>
                    <input className='InputUser' type='Password'></input>
                    <p className='CreeCompte' onClick={gotoLogin}>login</p>
                </div>
                
                <button className='ButtonLougin'>Register</button>
               
                
    
                
            </div>
            
            
            
           
            
    
            
             </div>
             </div>
             )
    
    } else {
        return (
            <div className='LoginContainer'>
            <div className='Login'> 
            <div className='Close'>  <i class="fal fa-times-circle"  onClick={onClose}></i></div>
          
            
            
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
                    <p className='CreeCompte' onClick={gotoRegister}>Cree un Compte??</p>
                </div>
                
                <button className='ButtonLougin'>Lougin</button>
               
                
    
                
            </div>
            
            
            
           
            
    
            
             </div>
             </div>
        )
    
    } 
    
    

        
        }



export default Login;