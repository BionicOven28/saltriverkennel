import React from 'react';

import PlannedLittersBtn from '../../../components/buttons/planned-litters-btn/PlannedLittersBtn';
import CurrentLittersBtn from '../../../components/buttons/current-litters-btn/CurrentLittersBtn';
import PastLittersBtn from '../../../components/buttons/past-litters-btn/PastLittersBtn';

import './litters-hub.css';

export default function LittersHub() {
    return(
        <>
        <div className="hp-title">
            <h1>Information on Litters</h1>
        </div>
        <div className="hp-desc">
            <p>first i want a description of how i choose to plan litters and what i look for in the breeding program dogs</p>
            <p>and finally I want there to be information on contacting me regarding litters/puppies</p>
            <p>then i want some buttons that lead to a planned litters page, a current litters page, and a past litters page</p>
        </div>
        <div>
            <PlannedLittersBtn />
        </div>
        <div>
            <CurrentLittersBtn />
        </div>
        <div>
            <PastLittersBtn />
        </div>
        </>
    );
}