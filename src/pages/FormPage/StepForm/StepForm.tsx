import PersonalInfoForm from "../../../components/PersonalInfoForm/PersonalInfoForm";
import SelectPlan from "../../../components/SelectPlan/SelectPlan";
import { StepFormProps, RenderForm } from "../../../types/types";


export default function StepForm({ currentStep, nextStep, updateFormValues }:StepFormProps) {
  const renderForm = ():RenderForm => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} updateFormValues={updateFormValues}/>;
      case 2:
        return <SelectPlan nextStep={nextStep}/>;
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
