const PasswordInput = ({ id, label, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type="password"
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default PasswordInput;
