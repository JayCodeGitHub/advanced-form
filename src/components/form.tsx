import { useState } from "react";
import { motion } from "framer-motion";
import Step from "./step";

function Form() {
  let [step, setStep] = useState(1);
  return (
    <form className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
      <div className="flex justify-between rounded p-8">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
      </div>
      <div className="space-y-2 px-8">
        {step === 1 ? (
          <>
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
          </>
        ) : step === 2 ? (
          <>
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
            <div className="h-4 rounded bg-neutral-100" />
          </>
        ) : step === 3 ? (
          <>
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
            <div className="h-4 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
          </>
        ) : step === 4 ? (
          <>
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
            <div className="h-4 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
          </>
        ) : step === 5 ? (
          <>
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
            <div className="h-4 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
          </>
        ) : null}
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={() => setStep(step < 2 ? step : step - 1)}
            className={`${
              step === 1 ? "pointer-events-none opacity-50" : ""
            } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
          >
            Back
          </button>
          <motion.button
            onClick={() => setStep(step > 5 ? step : step + 1)}
            type={step > 5 ? "submit" : "button"}
            className="bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700"
          >
            {step > 4 ? "Submit" : "Continue"}
          </motion.button>
        </div>
      </div>
    </form>
  );
}

export default Form;
