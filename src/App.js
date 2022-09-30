import './App.css';
import  NavBar from './components/header/header';
import { Routes, Route, Link } from "react-router-dom";
import AllFiles from './pages/AllFiles'
import JsonUpload from './pages/Jsonupload/JsonUpload'
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

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

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
