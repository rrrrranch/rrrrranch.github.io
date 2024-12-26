import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title light-text">Gonzalo</h1>
                <a className="navbar-link light-text" href="#home">Home</a>
                <a className="navbar-link light-text" href="#about">About</a>
                <a className="navbar-link light-text" href="#projects">Projects</a>
                <a className="navbar-link light-text" href="#connect">Connect</a>
                <h2 className="navbar-title light-text">Nediani</h2>
            </div>
        </nav>
    );
};

export default Navbar;
