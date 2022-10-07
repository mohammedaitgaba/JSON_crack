import Links from '../../components/navLinks/links'
import "./AllFiles.css"

function AllFiles({sendData}) {
    return (
      <div>
        <Links />
        <div className="allfiles-body">
           <div className='allfiles'>
           {sendData.map((item)=>{
              return (
              <div className='file'>
                <p>File Name : {item.real_name}</p>
                <div className='line-two'><p className='date'>{item.date}</p><p className='crack'>Crack</p></div>
              </div>
              )
            })}
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