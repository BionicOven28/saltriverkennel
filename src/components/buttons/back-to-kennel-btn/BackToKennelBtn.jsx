import React from 'react';

import './back-to-kennel-btn.css';

class BackToKennelBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/kennel">
                    <button type="button" class="btn btn-outline-warning">Return to Kennel Page</button>
                </a>
            </div>
        )
    }
};

export default BackToKennelBtn;