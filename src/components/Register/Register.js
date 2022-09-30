import './Register.css';
import React from 'react';


const Register = ({openRegister,CloseRegister})=>{
    if(!openRegister ) return null
return(
    <div className='Login'> 
    <p className='Close' onClick={CloseRegister} >X</p> 
   
   <div className='NumLogo'>
       <p class="logo">
       JSON
        <span>crack</span> 
       </p>
   </div>  
   <div> 
       <p className='Lougin' >Rougister</p>
   </div>

   <div>
       <div>
           <p className='user'>UserNAme</p>
           <input className='InputUser' type='text'></input>
       </div>
       <div>
           <p className='user'>Password</p>
           <input className='InputUser' type='Password'></input>
           
       </div>
       <button className='ButtonLougin'>Register</button>
       

       
   </div>

</div>


)





}

export default Register;