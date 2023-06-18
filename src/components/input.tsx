import { motion } from "framer-motion";

interface InputProps {
  error: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  number?: boolean;
}

function Input({
  error,
  name,
  value,
  placeholder,
  onChange,
  number,
}: InputProps) {
  return (
    <>
      <span>{error}</span>
      <motion.input
        name={name}
        value={value}
        placeholder={placeholder}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        onChange={onChange}
        className="w-full p-2 border-2 rounded-lg border-neutral-100"
        type={number ? "number" : "string"}
      />
    </>
  );
}

export default Input;
