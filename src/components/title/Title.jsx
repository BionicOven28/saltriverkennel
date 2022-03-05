import React from 'react';

import './title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="main-title-bg">
                <div className="main-title-box">
                    <h1 className="main-title">Taigh-Chon de Salann Abhainn</h1>
                    <h3 className="sub-title">Salt River Kennel</h3>
                </div>
            </div>
        )
    }
};

export default Title;