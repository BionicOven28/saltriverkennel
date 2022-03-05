import React from 'react';
import './home-page.css';

import MulderVictorianPhoto from '../../photos/MulderVictorianPhoto.jpg';

export default function HomePage() {
    return(
        <>
        <div className="hp-welcome-box">
            <h1 className="hp-welcome-header">Welcome!</h1>
            <img className="img-1" alt="Mulder1" src={MulderVictorianPhoto}/>
            <caption className="std-caption">"Mulder" (age 3) and kennel owner Tess Galloway, November 2021.</caption>
            <p className="hp-welcome-desc">Thank you for paying us a visit!<br/>We are Taigh-Chon de Salann Abhainn <i>(TYE-haoun de sah-LAHN OW-wain),</i><br/> or Salt River Kennel -- home of the squirrel hunting Golden Retrievers!<br/> Feel free to peruse the site to learn more about what we do and why we do it!</p>
        </div>
        <div className="hp-events">
            <h1 className="hp-events-title">Events</h1>
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