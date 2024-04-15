import { TextField } from "@mui/material";
const CustomTexfield = ({
  name,
  value,
  error,
  onChange,
  label,
  required,
  type = "text",
  ...props
}) => {
  return (
    <TextField
      fullWidth
      type={type}
      name={name}
      label={`${label || ""} ${required ? "*" : ""}`}
      placeholder="Ingrese su numero de documento"
      value={value}
      error={error}
      onChange={onChange}
      {...props}
    />
  );
};

export default CustomTexfield;
