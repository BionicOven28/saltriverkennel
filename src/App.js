import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
    return (
        <div style={{ display: 'flex'}}>
          <h1>Here's a Header!</h1>
          <nav
            style={{
              border: 'solid 1px',
              padding: '1rem'
            }}>
            <NavLink to="/home-page">Home Page</NavLink> |{""}
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <Outlet />
        </div>
    );
}