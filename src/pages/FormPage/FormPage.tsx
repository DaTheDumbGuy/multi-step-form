import { useState } from "react";
import StepList from "./StepList/StepList";
import StepForm from "./StepForm/StepForm";
import { FormDataEntryValue } from "../../types/types";

export default function FormPage(){
    const [currentStep, setCurrentStep] = useState(1);
    const [formValues, setFormValues] = useState<Array<{ [key: string]: FormDataEntryValue }>>([]);

    const nextStep = ()=> {
        if(currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    }
    const updateFormValues = (newValues: { [key: string]: FormDataEntryValue }) => {
        setFormValues(prevValues => {
          const updatedValues = [...prevValues];
          updatedValues[currentStep - 1] = { ...newValues };
          return updatedValues;
        });
      };
    console.log(formValues)
    return(
        <main>
            <StepList currentStep={currentStep}/>
            <StepForm currentStep={currentStep} nextStep={nextStep} updateFormValues={updateFormValues}/>
        </main>
    )
}