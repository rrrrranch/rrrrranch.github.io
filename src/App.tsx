import React from 'react';
import Navbar from './components/Navbar';
import SectionA from './components/SectionA';
import Footer from './components/Footer';
import Blog from './components/Blog';

import './styles.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Navbar />
            <SectionA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;