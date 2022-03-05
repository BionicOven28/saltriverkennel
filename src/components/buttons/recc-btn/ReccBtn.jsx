import React from 'react';

import './recc-btn.css';

class ReccBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/recommended-trainers">
                    <button type="button" class="btn btn-outline-primary">
                        Recommended Trainers
                    </button>
                </a>
            </div>
        )
    }
};

export default ReccBtn;