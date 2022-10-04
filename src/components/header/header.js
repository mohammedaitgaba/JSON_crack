import React, {useState}  from "react";
import coffee from '../../assets/coffee.svg';
import light from '../../assets/light.svg';
import './header.css';
import Login from '../login/login';

function Header(){
  const [openLogin, setOpenLogin ] = useState(false);
  


    return (
        <div className="Header">
          <header className='Header-header'>
            <div className="left-header">
              <p class="logo">
                JSON
                <span>crack</span>
              </p>
            </div>
            <div className="right-header">
              <div className='mode'><img src={light}/></div>
              <div className='separate'></div>
              <div className='btn-Coffee'><button className='btn'>Buy Me a Coffee<img src={coffee}/></button></div>
              <div className='separate'></div>
              <div className='btn-Join'>
                <button onClick={()=> setOpenLogin(true)} className='btn'>Join Us</button>
                </div>
            </div>
            <div className='bottom-line'></div>
          </header>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes> */}

          <Login open={openLogin} onClose={()=> setOpenLogin(false)} />
          
        </div>
      )
}

export default Header;