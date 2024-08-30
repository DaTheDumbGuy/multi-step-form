import AddOns from "../../../components/AddOns/AddOns";
import FinishingUp from "../../../components/FinishingUp/FinishingUp";
import PersonalInfoForm from "../../../components/PersonalInfoForm/PersonalInfoForm";
import SelectPlan from "../../../components/SelectPlan/SelectPlan";
import { StepFormProps, RenderForm } from "../../../types/types";
import styles from '../formPage.module.scss';

export default function StepForm({ currentStep, nextStep, updateFormValues }:StepFormProps) {
  const renderForm = ():RenderForm => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm nextStep={nextStep} updateFormValues={updateFormValues}/>;
      case 2:
        return <SelectPlan nextStep={nextStep} updateFormValues={updateFormValues}/>;
      case 3:
        return <AddOns nextStep={nextStep} updateFormValues={updateFormValues}/>;
      case 4:
        return <FinishingUp nextStep={nextStep} updateFormValues={updateFormValues}/>;
      default:
        return null;
    }
  };

  return (
    <section className={styles['b-formPage__stepForm']}>
      {renderForm()}
    </section>
  );
}
