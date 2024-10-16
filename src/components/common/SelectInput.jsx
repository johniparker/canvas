// components/common/SelectInput.jsx
import React from 'react';

const SelectInput = ({ id, value, onChange, options }) => {
  return (
    <div>
      <label htmlFor={id}>Select Role:</label>
      <select id={id} value={value} onChange={onChange} required>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
