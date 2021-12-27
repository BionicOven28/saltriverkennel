import React from 'react';

import BackToTrainingPageBtn from '../../components/buttons/back-btns/back-to-training-btn/BackToTrainingPageBtn';

import './started-dogs.css';

export default function StartedDogs() {
    return(
        <>
        <BackToTrainingPageBtn />
        <div className="hp-title">
            <h1>Started and Trained Dogs</h1>
        </div>
        <div className="hp-desc">
            <p>Here is where we'll advertise puppies who have been started and adolescent/adult dogs that are already trained</p>
        </div>
        </>
    );
}