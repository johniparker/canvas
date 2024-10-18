import { useForm } from "../../context/FormProvider";

const SelectInput = ({ options, name, label }) => {
  const form = useForm();
  return (
      <label>
        {label}
      <select 
      name={name}
      onChange={(e) => form.setValue(name, e.target.value)}
      required>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      </label>
  );
};

export default SelectInput;
