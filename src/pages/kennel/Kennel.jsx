import React from 'react';

import FemaleBtn from '../../components/buttons/females-btn/FemaleBtn';
import MaleBtn from '../../components/buttons/males-btn/MaleBtn';

import './kennel.css';

export default function Kennel() {
    return(
        <>
        <div className="hp-title">
            <h1>Meet the Dogs of Salt River Kennel</h1>
        </div>
        <div className="hp-desc">
            <p>I want to do two display cards, one says females and one says males</p>
            <p>There will be buttons to lead to the females and to lead to the males</p>
            <FemaleBtn />
            <MaleBtn />
        </div>
        </>
    );
}