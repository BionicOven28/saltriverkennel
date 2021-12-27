import React from 'react';

import BackToLitterHubBtn from '../../../components/buttons/back-btns/back-to-litter-hub-btn/BackToLitterHubBtn';

import './planned-litters.css';

export default function PlannedLitters() {
    return(
        <>
        <BackToLitterHubBtn />
        <div className="hp-title">
            <h1>Litters Planned for the Future</h1>
        </div>
        <div className="hp-desc">
            <p>Here there's going to be litter announcement graphics and details about litters that are either accepting deposits or litters farther into the future</p>
        </div>
        </>
    );
}