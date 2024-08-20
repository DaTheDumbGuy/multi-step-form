
interface currentStep {
    currentStep: number;
}


export default function StepList({ currentStep } : currentStep) {
  const steps = [
    { number: 1, title: "Step 1", description: "Your Info" },
    { number: 2, title: "Step 2", description: "Select Plan" },
    { number: 3, title: "Step 3", description: "Add Ons" },
    { number: 4, title: "Step 4", description: "Summary" }
  ];

  return (
    <section>
      <ul>
        {steps.map(step => (
          <li key={step.number}>
            <p className={step.number === currentStep ? 'active' : ''}>{step.number}</p>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
