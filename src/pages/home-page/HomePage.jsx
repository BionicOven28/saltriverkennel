import React, { Component } from 'react';
import './home-page.css';

class HomePage extends Component {
    render() {
        return (
            <>
            <div className="title-container">
                <h1>Salt River Kennel</h1>
            </div>
            <div className="app-desc-container">
                <p>Welcome to Salt River Kennel</p>
            </div>
            </>
        )
    }
};

export default HomePage;