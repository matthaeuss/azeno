import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" element={<Link to="/Profile">Profile</Link>} />
                <Route path="/profile" element={<Link to="/Profile">Home</Link>} />
            </div>
        </BrowserRouter>
    );
}

export default App;
