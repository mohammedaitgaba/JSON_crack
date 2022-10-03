import Links from '../../components/navLinks/links'
import "./AllFiles.css"

function AllFiles() {
    return (
      <div>
        <Links />
        <div className="allfiles-body">
           <div className='allfiles'>
            <div className='file'>
              <p>File Name : Data.json</p>
              <div className='line-two'><p className='date'>Wed Sep 28 2022 16:20:01</p><p className='crack'>Crack</p></div>
            </div>
            <div className='file'>
              <p>File Name : Data.json</p>
              <div className='line-two'><p className='date'>Wed Sep 28 2022 16:20:01</p><p className='crack'>Crack</p></div>
            </div>
            <div className='file'>
              <p>File Name : Data.json</p>
              <div className='line-two'><p className='date'>Wed Sep 28 2022 16:20:01</p><p className='crack'>Crack</p></div>
            </div>
            <div className='file'>
              <p>File Name : Data.json</p>
              <div className='line-two'><p className='date'>Wed Sep 28 2022 16:20:01</p><p className='crack'>Crack</p></div>
            </div>
            <div className='file'>
              <p>File Name : Data.json</p>
              <div className='line-two'><p className='date'>Wed Sep 28 2022 16:20:01</p><p className='crack'>Crack</p></div>
            </div>
          </div>
        </div>

        <div class="login">
          <h3>Sign In to see your files</h3>
          <button>Sign In</button>
        </div>
       

        </div>
        
    );
  }
  
export default AllFiles;