import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <h2 className="footer-title">Product Instructions and Guides</h2>
            <p className="footer-description">
                3587T can be handled by both men and women. Think more, design less. After use, 
                share on social media and shape. Side step, make nachos optional, but recommend 
                it. For best results, always use grotesque with black and white with additional 
                color. Never go too fancy. For worst results, use without coffee. Now might be a 
                good time to refresh your mind.
            </p>
            <p className="author">G.N. EOF 2024.</p>
        </footer>
    );
};

export default Footer;
