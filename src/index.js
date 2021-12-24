import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import HomePage from './pages/home-page/HomePage';
import Contact from './pages/contact/Contact';
import Training from './pages/training/Training';
import Kennel from './pages/kennel/Kennel';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home-page" element={<HomePage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="training-program" element={<Training />} />
                <Route path="kennel" element={<Kennel />} />

                <Route 
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>, 
    rootElement
);