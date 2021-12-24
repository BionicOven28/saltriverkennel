import React from 'react';

import './female-btn.css';

class FemaleBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/females">
                    <button type="button" class="btn btn-outline-danger">
                        Females
                    </button>
                </a>
            </div>
        )
    }
};

export default FemaleBtn;