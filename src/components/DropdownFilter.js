import React, { useState } from 'react';
import Select from 'react-select';

const DropdownFilter = ({ apiResponse, setFilteredResponse }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { value: 'numbers', label: 'Numbers' },
        { value: 'alphabets', label: 'Alphabets' },
        { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' },
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);

        // Filter the API response based on selected options
        const filtered = {};
        selected.forEach((option) => {
            if (apiResponse[option.value]) {
                filtered[option.value] = apiResponse[option.value];
            }
        });

        setFilteredResponse(filtered);
    };

    return (
        <div>
            <h2>Filter Response</h2>
            <Select
                isMulti
                options={options}
                onChange={handleChange}
                value={selectedOptions}
            />
        </div>
    );
};

export default DropdownFilter;
