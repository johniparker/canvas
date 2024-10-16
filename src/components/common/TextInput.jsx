// components/common/TextInput.jsx
import React from 'react';

const TextInput = ({ id, label, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
