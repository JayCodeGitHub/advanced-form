function Form() {
  return (
    <form className="mx-auto w-full max-w-md rounded-lg bg-white shadow-xl">
      <div className="flex justify-between rounded p-8">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
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
          <button>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
