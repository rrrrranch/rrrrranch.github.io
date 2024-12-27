import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">Gonzalo Nediani</h1>
                <a className="social-link" target="_blank" href="https://x.com/rrrrranch">X</a>
                <a className="navbar-link" target="_blank" href="#home">#</a>
                <a className="social-link" target="_blank" href="https://github.com/rrrrranch">GHUB</a>
                <a className="navbar-link" target="_blank" href="#home">?</a>
                <a className="navbar-link" target="_blank" href="#about">MORE</a>
                <a className="social-link" target="_blank" href="https://www.linkedin.com/in/gonzalonediani/">LNKD</a>
                <a className="social-link" target="_blank" href="https://www.youtube.com/@rrrrranch">YOUT</a>
                <a className="navbar-link" target="_blank" href="#connect">CNNCT</a>
                <a className="social-link" target="_blank" href="https://www.instagram.com/rrrrranch">INST</a>
                <a className="navbar-link" target="_blank" href="#projects">PRJ</a>
                <a className="social-link" target="_blank" href="https://www.behance.net/gonzalonediani">BHNC</a>
                <a className="navbar-link" target="_blank" href="#home">~</a>
                <h2 className="navbar-description">Raised offline, present online.</h2>
            </div>
        </nav>
    );
};

export default Navbar;
