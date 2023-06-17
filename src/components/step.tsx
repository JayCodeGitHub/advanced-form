interface StepProps {
  step: number;
}

function Step({ step }: StepProps) {
  return (
    <div>
      <span>{step}</span>
    </div>
  );
}

export default Step;
