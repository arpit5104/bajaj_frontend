import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';
import DropdownFilter from './components/DropdownFilter';

const App = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const [filteredResponse, setFilteredResponse] = useState(null);

    return (
        <div style={{ padding: '20px' }}>
            <h1>0827CS211037</h1> {/* Replace with your roll number */}
            <InputForm setApiResponse={setApiResponse} />
            {apiResponse && (
                <>
                    <DropdownFilter apiResponse={apiResponse} setFilteredResponse={setFilteredResponse} />
                    <ResponseDisplay filteredResponse={filteredResponse} />
                </>
            )}
        </div>
    );
};

export default App;
