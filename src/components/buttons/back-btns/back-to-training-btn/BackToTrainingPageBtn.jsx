import React from 'react';

import './back-to-training-page-btn.css';

class BackToTrainingPageBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/training-program">
                    <button type="button" class="btn btn-outline-warning">Return to Training</button>
                </a>
            </div>
        )
    }
};

export default BackToTrainingPageBtn;