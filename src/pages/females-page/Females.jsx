import React from 'react';

import BackToKennelBtn from '../../components/buttons/back-to-kennel-btn/BackToKennelBtn';
import ProgramDogCard from '../../components/program-dog-card/ProgramDogCard';

import './females.css';

export default function Females() {
    return(
        <>
        <BackToKennelBtn />
        <div className="hp-title">
            <h1>the Females of Salt River Kennel</h1>
        </div>
        <div className="hp-desc">
            <p>here will display cards of all of the female dogs at salt river kennel that are used in the breeding program</p>
        </div>
        <ProgramDogCard />
        </>
    );
}