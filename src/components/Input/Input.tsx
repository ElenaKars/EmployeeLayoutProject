import { InputProps } from "./types";
import { InputWrapper, InputStyled, Label, ErrorMessage } from "./styles";

function Input({
  name,
  type = 'text',
  placeholder,
  label,
  id,
  value,
  onChange,
  error
}: InputProps) {
  return (
    <InputWrapper>
      {label && (
        <Label htmlFor={name} className="input-label">
          {label}
        </Label>
      )}
      <InputStyled
        as={type === "textarea" ? "textarea" : "input"}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputWrapper>
  );
}

export default Input;
