import { useState } from "react";
import { motion } from "framer-motion";
import Step from "./step";

function Form() {
  let [step, setStep] = useState(1);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    budget: "",
    informations: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    budget: "",
    informations: "",
  });

  const stepBack = () => {
    setStep(step < 2 ? step : step - 1);
    console.log("back");
  };

  const stepContinue = () => {
    setStep(step > 5 ? step : step + 1);
    console.log("Continue");
  };

  const updateField = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 5) {
      return null;
    }

    console.log(form);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl"
    >
      <div className="flex justify-between rounded p-8">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
      </div>
      <div className="space-y-2 px-8 flex justify-start flex-col gap-2 h-36">
        {step === 1 ? (
          <>
            <motion.input
              name="firstName"
              value={form.firstName}
              placeholder="First Name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2"
            />
            <motion.input
              name="lastName"
              value={form.lastName}
              placeholder="Last Name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2"
            />
          </>
        ) : step === 2 ? (
          <>
            <motion.input
              name="phone"
              value={form.phone}
              placeholder="Phone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2"
            />
            <motion.input
              name="email"
              value={form.email}
              placeholder="Email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2"
            />
          </>
        ) : step === 3 ? (
          <>
            <motion.input
              name="budget"
              value={form.budget}
              placeholder="Estimated budget"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2"
            />
          </>
        ) : step === 4 ? (
          <>
            <motion.textarea
              name="informations"
              value={form.informations}
              maxLength={250}
              placeholder="Additional information"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onChange={updateField}
              className="border-2 border-neutral-100 w-full rounded-lg p-2 h-full"
            />
          </>
        ) : step === 5 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-5/6 rounded bg-neutral-100"
            >
              summary
            </motion.div>
          </>
        ) : null}
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={stepBack}
            className={`${
              step === 1 ? "pointer-events-none opacity-50" : ""
            } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
          >
            Back
          </button>
          {step >= 5 ? (
            <motion.button
              type="submit"
              onClick={() => setStep(6)}
              className="bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700"
            >
              Submit
            </motion.button>
          ) : (
            <motion.button
              type="button"
              onClick={stepContinue}
              className="bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700"
            >
              Continue
            </motion.button>
          )}
        </div>
      </div>
    </form>
  );
}

export default Form;
