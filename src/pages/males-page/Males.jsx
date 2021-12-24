import React from 'react';

import BackToKennelBtn from '../../components/buttons/back-to-kennel-btn/BackToKennelBtn';

import './males.css';

export default function Males() {
    return(
        <>
        <BackToKennelBtn />
        <div className="hp-title">
            <h1>the Males of Salt River Kennel</h1>
        </div>
        <div className="hp-desc">
            <p>here will display cards of all of the male dogs at salt river kennel that are used in the breeding program</p>
        </div>
        </>
    );
}