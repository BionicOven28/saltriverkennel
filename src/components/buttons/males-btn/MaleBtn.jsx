import React from 'react';

import './male-btn.css';

class MaleBtn extends React.Component {
    render() {
        return (
            <div>
                <a href="/males">
                    <button type="button" class="btn btn-outline-warning">Males</button>
                </a>
            </div>
        )
    }
};

export default MaleBtn;