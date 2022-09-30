import coffee from '../../assets/coffee.svg';
import light from '../../assets/light.svg';
import './header.css';

function header(){
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
              <div className='btn-Join'><button className='btn'>Join Us</button></div>
            </div>
            <div className='bottom-line'></div>
          </header>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes> */}
        </div>
      );
}

export default header;