import './App.css';
import  NavBar from './components/header/header';
import { Routes, Route, Link } from "react-router-dom";
import AllFiles from './pages/AllFiles'
import JsonUpload from './pages/JsonUpload'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='body'>
        <Routes>
        <Route path="/" element={<JsonUpload />} />
        <Route path="/AllFiles" element={<AllFiles />} />
      </Routes> 
      </div >
      </div>
  );
}

export default App;
