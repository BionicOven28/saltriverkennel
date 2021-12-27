import React from 'react';
import StartedDogsBtn from '../../components/buttons/started-dogs-btn/StartedDogsBtn';
import './training.css';

export default function Training() {
    return(
        <>
        <div className="hp-title">
            <h1>Training Program</h1>
        </div>
        <div className="hp-desc">
            <p>This is where we describe the training program</p>
            <p>Board and trains, group classes, etc. are all here (may navigate to different pages)</p>
        </div>
        <StartedDogsBtn />
        </>
    );
}