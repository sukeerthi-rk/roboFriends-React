import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1[x solid black', height: '460px' }}>
            {props.children}
        </div>
    )
}
export default Scroll;