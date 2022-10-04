import React, {useState}  from "react";
import coffee from '../../assets/coffee.svg';
import Login from '../login/login';
// import light from '../../assets/light.svg';
import './header.css';
import styled ,{ThemeProvider} from "styled-components";
import { lightTheme,darkTheme,GlobalStyles } from "../../themes.js";


function Header({Modeswitcher}){
  const [theme, setTheme] = useState('light');
  const [openLogin, setOpenLogin ] = useState(false);
  const Styledapp = styled.div``;
  const themeToggler = () =>{
    theme === "light" ? setTheme("dark") :  setTheme("light")
    Modeswitcher(theme)
  }
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Styledapp>
        <div className="Header" >
          <header className='Header-header'>
            <div className="left-header">
              <p class="logo" style={{color : theme ==="light" ? "black" : "white"}}>
                JSON
                <span>crack</span>
              </p>
            </div>
            <div className="right-header">
              <div className='mode' onClick={themeToggler}> 
                {theme === "light" ?   <i class="fal fa-moon" style={{color : 'black'}} ></i>  :<i  class="fal fa-lightbulb-on" ></i>}
              </div>
              <div className='separate' ></div>
              <div className='btn-Coffee'><button className='btn' style={{color : theme ==="light" ? "black" : "white"}} >Buy Me a Coffee<img src={coffee}/></button></div>
              <div className='separate' ></div>
              <div className='btn-Join'><button className='btn' onClick={()=> setOpenLogin(true)} style={{color : theme ==="light" ? "black" : "white"}} >Join Us</button></div>
            </div>
            <div className='bottom-line'></div>
          </header>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes> */}

          <Login open={openLogin} onClose={()=> setOpenLogin(false)} />
          
        </div>
        </Styledapp>
      </ThemeProvider>
      );
}

export default Header;