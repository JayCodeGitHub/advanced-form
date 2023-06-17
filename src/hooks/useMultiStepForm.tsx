import { useState } from "react";

export function useMultiStepForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    budget: "",
    informations: "",
  });
  return { form, setForm };
}
