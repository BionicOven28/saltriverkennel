import React from 'react';

import './current-litters-btn.css';

class CurrentLittersBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/current-litters">
                    <button type="button" class="btn btn-outline-secondary">
                        Current Litters
                    </button>
                </a>
            </div>
        )
    }
};

export default CurrentLittersBtn;