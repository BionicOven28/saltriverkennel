import React from 'react';

import './past-litters-btn.css';

class PastLittersBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/past-litters">
                    <button type="button" class="btn btn-outline-success">
                        Past Litters
                    </button>
                </a>
            </div>
        )
    }
};

export default PastLittersBtn;