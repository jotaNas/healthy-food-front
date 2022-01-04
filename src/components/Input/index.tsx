import { FC, InputHTMLAttributes } from "react";
import { StyleInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <StyleInput>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest}></input>
    </StyleInput>
  );
};
