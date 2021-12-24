import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Title from './components/title/Title';

import './App.css';

export default function App() {
    return (
        <div className="navi-box">
          <Title />
          <Nav className="navi">
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
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/kennel">Kennel</NavLink>
          </Nav>
          <Outlet />
        </div>
    );
}