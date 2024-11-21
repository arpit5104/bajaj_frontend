import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ setApiResponse }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const parsedInput = JSON.parse(jsonInput); // Validate JSON format
            const response = await axios.post('https://bajajbackend-bab3d2d305ec.herokuapp.com/bfhl', parsedInput);
            setApiResponse(response.data); // Set the response data for display
            setError('');
        } catch (err) {
            setError('Invalid JSON format or server error.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter JSON Input</h2>
            <textarea
                rows="5"
                placeholder='Example: {"data": ["A", "1", "z"]}'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default InputForm;
