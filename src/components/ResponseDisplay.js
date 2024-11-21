import React from 'react';

const ResponseDisplay = ({ filteredResponse }) => {
    if (!filteredResponse) return null;

    return (
        <div>
            <h2>Filtered Response</h2>
            <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
    );
};

export default ResponseDisplay;
