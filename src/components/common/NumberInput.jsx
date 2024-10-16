// components/common/NumberInput.jsx
import React from 'react';

const NumberInput = ({ id, label, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default NumberInput;
