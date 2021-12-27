import React from 'react';

import './back-to-litter-hub-btn.css';

class BackToLitterHubBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/litters">
                    <button type="button" class="btn btn-outline-warning">Return to Litter Hub</button>
                </a>
            </div>
        )
    }
};

export default BackToLitterHubBtn;