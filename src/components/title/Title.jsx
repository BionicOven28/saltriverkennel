import React from 'react';

import './title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="main-title-bg">
                <div className="main-title-box">
                    <h1 className="main-title">Squirrel River</h1>
                    <h2 className="sub-title">de Abhainn Feorag</h2>
                </div>
            </div>
        )
    }
};

export default Title;