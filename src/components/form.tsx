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
        <h1 className="text-black">Advanced Form</h1>
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button>Back</button>
          <button>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
