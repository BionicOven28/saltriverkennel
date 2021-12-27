import React from 'react';

import BackToLitterHubBtn from '../../../components/buttons/back-btns/back-to-litter-hub-btn/BackToLitterHubBtn';

import './current-litters.css';

export default function CurrentLitters() {
    return(
        <>
        <BackToLitterHubBtn />
        <div className="hp-title">
            <h1>Litters We Have On The Ground</h1>
        </div>
        <div className="hp-desc">
            <p>look at all of the pictures of our current litters and the puppies we have</p>
        </div>
        </>
    );
}