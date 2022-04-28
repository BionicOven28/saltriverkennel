import React from 'react';
/* import Button from 'react-bootstrap/button';*/
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
            {/*<Button
              variant="primary"
              class="nav-btn"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
                }
              to="/home">Home</Button>*/}
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/home">Home</NavLink>
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/contact">Contact</NavLink>
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/info">Info</NavLink>
              <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/about">About</NavLink>
            <NavLink 
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/posts">Posts</NavLink>
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/brags">Brags</NavLink>
            <NavLink 
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
            to="/kennel">Kennel</NavLink>
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/breeding-program">Breeding Program</NavLink>
            <NavLink
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
            to="/litters">Litters</NavLink>
            <NavLink 
              className="navi-link"
              style={
                ({ isActive }) => 
                  isActive 
                    ? {
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(245,245,245)',
                      background: 'rgba(65,90,84,1)',
                      padding: '0.25rem'
                    }
                    : { 
                      textDecoration: "none",
                      display: 'block',
                      margin: '1rem 0.40rem 1rem 0.40rem',
                      color: 'rgba(243, 157, 53, 1)',
                      padding: '0.25rem'
                    }
              }
              to="/training-program">Training Program</NavLink> 
          </Nav>
          <Outlet />
          <Footer />
      </>
    );
}