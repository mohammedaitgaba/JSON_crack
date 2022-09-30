import './App.css';
import  NavBar from './components/header/header';

import { Routes, Route, Link } from "react-router-dom";
import AllFiles from './pages/AllFiles'
import JsonUpload from './pages/JsonUpload'
import Login  from './components/login/login'


function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='body'>
        <Routes>
        <Route path="/" element={<JsonUpload />} />
        <Route path="/AllFiles" element={<AllFiles />} />
        {/* <Route path="/Login" element={<Login />} /> */}

      </Routes> 
      </div >
      </div>
      
  );
}



function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}


export default App;
