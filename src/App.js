import React from 'react';
import { render } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from './pages/home-page/HomePage';
// import Contact from './pages/contact/Contact';

export default function App() {
    return (
        <div>
          <h1>Here's a Header!</h1>
          <nav
            style={{
              border: 'solid 1px',
              paddingBottom: '1rem'
            }}>
            <Link to="/home-page">Home Page</Link> |{""}
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
    );
}