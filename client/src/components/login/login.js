import './Login.css';
// import AllFiles from '../../pages/AllFiles/AllFiles'
import React, {useEffect, useState}  from "react";





const Login = ({open,onClose}) =>{
    const [register,setRegister] = useState(false)
    const [backendData, setBackendData] = useState([{}])
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    // const [openRegister, setOpenRegister ] = useState(false);
  
    const check_user= ()=>{
        console.log(username,password);
        // fetch("/api/users/",{
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
            
        //     body : JSON.stringify({
        //         username : username,
        //         password : password
        //   })
        //     // .catch(err => console.log(err))
        // }
        
        // ).then(res => res.json())
        // .then(data=>console.log(data))
        // let data = {username: username, password: password}
        fetch("/api/users/"+username).then(
            response=> response.json()
          ).then(
           data=>{
            setBackendData(data)
          
           if(data[0].Password === password) {
            
            sessionStorage.setItem("id",data[0].id)
            onClose();
            
           }else{
            console.log("sir sir");
           }
        }
            )

            
           
    }
  

   
   

    // <Route path="/AllFiles" element={<AllFiles sendData={backendData}/>} />
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
                </div>
              
                <div>
                    <p className='user'>Confirmer Password</p>
                    <input className='InputUser' type='Password'></input>
                    <p className='CreeCompte' onClick={gotoLogin}>Deja Cree le compte</p>
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
          
            
            
            <form  method="GET">
            <div> 
                <p className='Lougin' >Login</p>
                
                
            </div>
    
            <div>
                <div>
                    <p className='user'>UserNAme</p>
                    <input name="fname" className='InputUser' type='text' onChange={e=>setUsername(e.target.value)} value={username} required></input>
                </div>
                <div>
                    <p className='user'>Password</p>
                    <input name="password" className='InputUser' type='Password' onChange={a=>setPassword(a.target.value)} value={password} required></input>
                    <p  className='CreeCompte' onClick={gotoRegister}>Cree un Compte??</p>
                </div>
                
                <button type='button' onClick={()=>check_user()} className='ButtonLougin'>Lougin</button>
               
                
            
                
            </div>
            
            </form>
            
           
            
    
            
             </div>
             </div>
        )
    
    } 
    
    

        
        }



export default Login;