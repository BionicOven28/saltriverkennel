import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet, NavLink } from 'react-router-dom';

import Title from './components/title/Title';
import Footer from './components/footer/Footer';

import './App.css';

export default function App() {
    return (
        <>
          <Title />
          <Nav className="navi">
              <h3><NavLink
              className="nav-link"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "0.25rem 0",
                  color: isActive ? "#F9629C" : "#2A7221"
                };
              }}
              to="/home">Home</NavLink></h3>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/info">Info</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/posts">Posts</NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/brags">Brags</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
            to="/kennel">Kennel</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
            to="/litters">Litters</NavLink>
            <NavLink 
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to="/training-program">Training Program</NavLink> 
          </Nav>
          <Outlet />
          <Footer />
      </>
    );
}