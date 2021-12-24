import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
    return (
        <div>
          <Navbar>
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
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/training-program">Training Program</NavLink>
          </Navbar>
          <Outlet />
        </div>
    );
}