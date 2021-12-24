import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
    return (
        <div>
          <h1>Here's a Header!</h1>
          <nav
            style={{
              border: 'solid 1px',
              paddingBottom: '1rem'
            }}>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/home-page">Home Page</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/contact">Contact</NavLink>
          </nav>
          <Outlet />
        </div>
    );
}