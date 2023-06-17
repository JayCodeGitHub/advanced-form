import Step from "./step";

function Form() {
  return (
    <form className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
      <div className="flex justify-between rounded p-8">
        <Step step={1} />
        <Step step={2} />
        <Step step={3} />
        <Step step={4} />
      </div>
      <div className="space-y-2 px-8">
        <div className="h-4 w-5/6 rounded bg-neutral-100" />
        <div className="h-4 rounded bg-neutral-100" />
        <div className="h-4 w-4/6 rounded bg-neutral-100" />
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button className="duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700">
            Back
          </button>
          <button className="bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
