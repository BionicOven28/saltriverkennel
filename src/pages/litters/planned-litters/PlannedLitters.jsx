import React from 'react';

import BackToKennelBtn from '../../../components/buttons/back-to-kennel-btn/BackToKennelBtn';

import './planned-litters.css';

export default function PlannedLitters() {
    return(
        <>
        <BackToKennelBtn />
        <div className="hp-title">
            <h1>Litters Planned for the Future</h1>
        </div>
        <div className="hp-desc">
            <p>Here there's going to be litter announcement graphics and details about litters that are either accepting deposits or litters farther into the future</p>
        </div>
        </>
    );
}