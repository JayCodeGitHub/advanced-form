import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  budget: "",
  informations: "",
};

export function useMultiStepForm() {
  const [form, setForm] = useState(initialForm);
  return { form, setForm };
}
