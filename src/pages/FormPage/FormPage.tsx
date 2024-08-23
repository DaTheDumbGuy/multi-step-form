import { useState } from "react";
import StepList from "./StepList/StepList";
import StepForm from "./StepForm/StepForm";
import { FormDataEntryValue } from "../../types/types";
import { useFormData } from "../../hooks/FormDataProvider";

export default function FormPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const { formValues, setFormValues } = useFormData();

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const updateFormValues = (newValues: { [key: string]: FormDataEntryValue }) => {
        setFormValues(prevValues => {
            const updatedValues = [...prevValues];
            updatedValues[currentStep - 1] = {
                ...updatedValues[currentStep - 1], // Ensure existing data is preserved
                ...newValues
            };
            return updatedValues;
        });
    };

    console.log(formValues);

    return (
        <>
            <StepList currentStep={currentStep} />
            <StepForm 
                currentStep={currentStep} 
                nextStep={nextStep} 
                updateFormValues={updateFormValues}
            />
        </>
    );
}
