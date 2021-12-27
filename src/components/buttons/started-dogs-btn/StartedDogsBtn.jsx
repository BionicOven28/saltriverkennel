import React from 'react';

import './started-dogs-btn.css';

class StartedDogsBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/started-dogs">
                    <button type="button" class="btn btn-outline-primary">
                        Started Dogs
                    </button>
                </a>
            </div>
        )
    }
};

export default StartedDogsBtn;