import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    margin: '.5rem',
};

export default () => (
    <div style={styles}>
        {/* copied from https://loading.io/css */}
        <div className="lds-dual-ring"></div>
    </div>
);
