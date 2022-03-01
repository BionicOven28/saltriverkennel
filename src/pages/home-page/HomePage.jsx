import React from 'react';
import './home-page.css';

export default function HomePage() {
    return(
        <>
        <div className="hp-box1">
            <h1 className="hp-header1">Welcome</h1>
            <p className="hp-desc1">Thank you for giving us a visit! We are Salt River Kennel -- home of the squirrel hunting Golden Retrievers!<br/> Feel free to peruse our website to learn more about what we do and why we do it.</p>
        </div>
        <div className="hp-title">
            <h1 className="hp-title-text">Our Mission Statement</h1>
        </div>
        <div className="hp-desc">
            <p className="hp-desc-text">Here's a brief description of our kennel mission statement uwu</p>
        </div>
        <div>
            Here's an object
        </div>
        </>
    );
}