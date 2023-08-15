import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/create" className="nav-link">Create</Link>
            </div>
            <div className="nav-right">
                <Link to="/login" className="nav-link">Login</Link>
            </div>
        </nav>
    );
}


export default Navbar;
