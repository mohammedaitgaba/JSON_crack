import './links.css';
import { Routes, Route, Link } from "react-router-dom";

function links(){
    return (
        <div className="links">
            <nav>
                <Link activeStyle={{ color: 'red' }} to="/">Upolad new File</Link>
                <Link activeStyle={{ color: 'red' }} to="/AllFiles">All Json Files</Link>
            </nav>
        </div>
      );
}

export default links;