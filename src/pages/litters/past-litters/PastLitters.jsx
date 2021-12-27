import React from 'react';

import BackToLitterHubBtn from '../../../components/buttons/back-btns/back-to-litter-hub-btn/BackToLitterHubBtn';

import './past-litters.css';

export default function PastLitters() {
    return(
        <>
        <BackToLitterHubBtn />
        <div className="hp-title">
            <h1>Litters We Raised and Placed</h1>
        </div>
        <div className="hp-desc">
            <p>memories of litters we had in the past</p>
        </div>
        </>
    );
}