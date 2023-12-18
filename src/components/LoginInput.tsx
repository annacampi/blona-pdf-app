import { Input } from "@chakra-ui/react";

/**
 * Props for the LoginInput component.
 * @typedef {Object} LoginInputProps
 * @property {string} placeholder - The placeholder text for the input.
 * @property {string} value - The current value of the input.
 * @property {function} onChange - The callback function to handle input changes.
 * @property {string} - The type of the input.
 */

type LoginInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

/**
 * LoginInput component representing an input field in the login form.
 * @param {LoginInputProps} props - The props for the LoginInput component.
 * @returns {JSX.Element} The rendered JSX element.
 */
export function LoginInput({ placeholder, value, onChange, type }: LoginInputProps) {
  return (
    <Input
      mb={3}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
    />
  );
}