import { useForm } from "../../context/FormProvider";
const NumberInput = ({ label, name, type = "number" }) => {
  const form = useForm();
  return (
    <label>
        {label}
        <input
          type={type}
          name={name}
          value={form.state?.[name] || ""}
          onChange={(e) => form.setValue(name, e.target.valueAsNumber)}
        />
      </label>
  );
};

export default NumberInput;

