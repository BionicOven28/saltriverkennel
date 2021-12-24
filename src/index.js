import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import HomePage from './pages/home-page/HomePage';
import Contact from './pages/contact/Contact';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="home-page" element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);