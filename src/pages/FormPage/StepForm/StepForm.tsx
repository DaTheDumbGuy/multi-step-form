import PersonalInfoForm from "../../../components/PersonalInfoForm/PersonalInfoForm";

interface stepForm  {
  currentStep: number;
  nextStep: ()=> void ;
}
type renderForm = JSX.Element | null;
export default function StepForm({ currentStep, nextStep }:stepForm) {
  const renderForm = ():renderForm => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep}/>;
      case 2:
        // return console.log("Step 2");
      case 3:
        // return alert("Step 3");
      case 4:
        // return alert("Step 4");
      default:
        return null;
    }
  };

  return (
    <section>
      {renderForm()}
    </section>
  );
}
